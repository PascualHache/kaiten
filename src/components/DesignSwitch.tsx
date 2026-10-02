import "./DesignSwitch.css";

export interface DesignSwitchOption<T extends string> {
  value: T;
  label: string;
}

interface DesignSwitchProps<T extends string> {
  /** Texto corto a la izquierda del control. */
  legend: string;
  options: DesignSwitchOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

/**
 * Control flotante de comparación de diseños. Es una herramienta interna
 * (solo se monta en modo dev), no parte de la interfaz pública.
 */
function DesignSwitch<T extends string>({
  legend,
  options,
  value,
  onChange,
}: DesignSwitchProps<T>) {
  return (
    <div className="design-switch" role="group" aria-label={legend}>
      <span className="design-switch__legend">{legend}</span>
      <div className="design-switch__track">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className="design-switch__option"
            aria-pressed={option.value === value}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DesignSwitch;
