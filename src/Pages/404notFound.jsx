import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import {
  Home,
  ArrowLeft,
  Rocket,
  Orbit,
  Sparkles,
} from "lucide-react";

const stars = Array.from({ length: 40 });

const floatingAnimation = {
  y: [0, -20, 0],
  rotate: [0, 8, -8, 0],
};

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(0,255,255,0.12), transparent 30%), radial-gradient(circle at bottom right, rgba(168,85,247,0.15), transparent 30%), #050816",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
      }}
    >
      {/* Grid Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Animated Stars */}
      {stars.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            borderRadius: "50%",
            background: "white",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Floating Rocket */}
      <motion.div
        animate={floatingAnimation}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          top: "10%",
          left: "8%",
          opacity: 0.2,
        }}
      >
        <Rocket size={90} color="#22d3ee" />
      </motion.div>

      {/* Floating Orbit */}
      <motion.div
        animate={floatingAnimation}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "8%",
          opacity: 0.2,
        }}
      >
        <Orbit size={100} color="#a855f7" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
        }}
      >
        {/* Small Badge */}
        <motion.div
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 3,
              py: 1,
              borderRadius: "999px",
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.2)",
              backdropFilter: "blur(10px)",
              mb: 4,
            }}
          >
            <Sparkles size={16} color="#67e8f9" />

            <Typography
              sx={{
                color: "#a5f3fc",
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Space-Time Error
            </Typography>
          </Box>
        </motion.div>

        {/* 404 */}
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "110px",
                md: "220px",
              },
              fontWeight: 900,
              lineHeight: 1,
              background:
                "linear-gradient(90deg, #22d3ee, #3b82f6, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(168,85,247,0.5)",
            }}
          >
            404
          </Typography>
        </motion.div>

        {/* Heading */}
        <Typography
          sx={{
            fontSize: {
              xs: "2.5rem",
              md: "4rem",
            },
            fontWeight: 900,
            color: "white",
            mb: 2,
          }}
        >
          Lost In{" "}
          <Box
            component="span"
            sx={{
              background:
                "linear-gradient(90deg, #22d3ee, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Deep Space
          </Box>
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: "#94a3b8",
            fontSize: {
              xs: "1rem",
              md: "1.2rem",
            },
            lineHeight: 1.8,
            maxWidth: "700px",
            mx: "auto",
            mb: 6,
          }}
        >
          The page you are searching for has vanished into another
          dimension. Maybe aliens stole it. Maybe your router became
          self-aware. We may never know 👽
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {/* Home Button */}
          <motion.div whileHover={{ scale: 1.08 }}>
            <Button
              startIcon={<Home />}
              onClick={() => (window.location.href = "/")}
              sx={{
                px: 4,
                py: 1.7,
                borderRadius: "18px",
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "none",
                background:
                  "linear-gradient(90deg, #06b6d4, #9333ea)",
                color: "white",
                boxShadow:
                  "0 0 35px rgba(147,51,234,0.4)",

                "&:hover": {
                  background:
                    "linear-gradient(90deg, #0891b2, #7e22ce)",
                  boxShadow:
                    "0 0 45px rgba(147,51,234,0.6)",
                },
              }}
            >
              Return Home
            </Button>
          </motion.div>

          {/* Back Button */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              startIcon={<ArrowLeft />}
              onClick={() => window.history.back()}
              sx={{
                px: 4,
                py: 1.7,
                borderRadius: "18px",
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "none",
                color: "white",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",

                "&:hover": {
                  background: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(255,255,255,0.3)",
                },
              }}
            >
              Go Back
            </Button>
          </motion.div>
        </Stack>

        {/* Footer */}
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <Typography
            sx={{
              color: "#475569",
              mt: 8,
              letterSpacing: "0.2em",
              fontSize: "0.8rem",
            }}
          >
            ERROR_404 • REALITY_NOT_FOUND.exe
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default NotFoundPage;
