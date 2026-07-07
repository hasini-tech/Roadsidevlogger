"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-asphalt-950"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Compass className="text-ember-500" size={48} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-sm uppercase tracking-[0.3em] text-cream-100/70"
          >
            Loading the journey
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
