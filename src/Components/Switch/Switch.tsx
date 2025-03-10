interface SwitchProps {
  label: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange?: (value: boolean) => void;
  loading?: boolean;
}

const Switch = ({
  label,
  value,
  setValue,
  handleChange,
  loading,
}: SwitchProps) => {
  const toggleSwitch = () => {
    setValue(!value);

    if (handleChange) {
      handleChange(!value);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={toggleSwitch}
        className={`relative inline-flex h-5 w-[34px] items-center rounded-full transition-colors focus:outline-none focus:ring-0 focus:primary focus:ring-offset-0 ${
          value ? "bg-primary900" : "bg-neutral300"
        }`}
        disabled={loading}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            value ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
      <span className="text-sm text-dark">{label}</span>
    </div>
  );
};

export default Switch;
