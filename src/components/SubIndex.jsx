import React, { useEffect, useRef, useState } from "react";
import { Box, List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const SubIndex = ({ sections, activeColor = "#4F2928", topOffset = 40 }) => {
  const [openSections, setOpenSections] = useState({});
  const [activeId, setActiveId] = useState(null);
  const entriesRef = useRef({});
  const observerRef = useRef(null);
  const parentMapRef = useRef({});

  useEffect(() => {
    const parentMap = {};
    sections.forEach((s) => {
      if (s.subSections) {
        s.subSections.forEach((sub) => {
          parentMap[sub.id] = s.id;
        });
      }
    });
    parentMapRef.current = parentMap;

    const ids = [];
    sections.forEach((s) => {
      ids.push(s.id);
      if (s.subSections) s.subSections.forEach((sub) => ids.push(sub.id));
    });

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entriesRef.current[entry.target.id] = entry.intersectionRatio;
        });

        const visible = Object.entries(entriesRef.current);
        if (visible.length === 0) return;
        visible.sort((a, b) => b[1] - a[1]);
        const [bestId] = visible[0];
        if (bestId && bestId !== activeId) {
          setActiveId(bestId);
          const parentId = parentMapRef.current[bestId];
          if (parentId) setOpenSections((prev) => ({ ...prev, [parentId]: true }));
        }
      },
      {
        root: null,
        // desplazamos el rootMargin para considerar altura de header y favorecer el top
        rootMargin: `-${topOffset}px 0px -40% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      observerRef.current && observerRef.current.disconnect();
      entriesRef.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections, topOffset]);

  const handleToggle = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleClick = (e, id, hasSub) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
    const parentId = parentMapRef.current[id];
    if (parentId) setOpenSections((prev) => ({ ...prev, [parentId]: true }));
    if (hasSub) handleToggle(id); // si tiene subsecciones, también toggle
  };

  return (
    <Box
      sx={{
        pl: 0,
        width: "250px",
        maxHeight: "80vh",
        overflowY: "auto",
        position: "sticky",
        top: topOffset,
        bgcolor: "transparent",
      }}
    >
      <List component="nav" sx={{ p: 0 }}>
        {sections.map((section) => {
          const isActiveSection = activeId === section.id;
          return (
            <Box sx={{ pl: 0, }}  key={section.id}>
              <ListItemButton
                component="a"
                href={`#${section.id}`}
                onClick={(e) => handleClick(e, section.id, !!section.subSections)}
                sx={{ pl: 0, }}
              >
                <ListItemText
                  primary={section.title}
                  primaryTypographyProps={{
                    fontWeight: isActiveSection ? "bold" : "normal",
                    color: isActiveSection ? activeColor : "inherit",
                  }}
                   sx={{ pl: 0,}}
                />
                {section.subSections && (openSections[section.id] ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>

              {section.subSections && (
                <Collapse in={openSections[section.id]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ pl: 2 }}>
                    {section.subSections.map((sub) => {
                      const isActiveSub = activeId === sub.id;
                      return (
                        <ListItemButton
                          key={sub.id}
                          component="a"
                          href={`#${sub.id}`}
                          sx={{ pl: 2 }}
                          onClick={(e) => handleClick(e, sub.id, false)}
                        >
                          <ListItemText
                            primary={sub.title}
                            primaryTypographyProps={{
                              fontWeight: isActiveSub ? "bold" : "normal",
                              color: isActiveSub ? activeColor : "inherit",
                              variant: "body2",
                            }}
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
    </Box>
  );
};

export default SubIndex;