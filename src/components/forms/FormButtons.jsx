import React from "react";
import { motion } from "framer-motion";
import "./Forms.css";

const FormButtons = ({ onBack, submitLabel = "🚀 Submit" }) => {
  return (
    <div className="form-buttons">
      <motion.button
        type="button"
        className="btn-back"
        onClick={onBack}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back
      </motion.button>

      <motion.button
        type="submit"
        className="btn-submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
      >
        {submitLabel}
      </motion.button>
    </div>
  );
};

export default FormButtons;
