import { FC, useCallback, useId } from "react";

export interface CheckboxProps {
  isChecked?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  isChecked,
  onChange = () => {},
}) => {
  const checkboxId = useId();

  const handleChange = useCallback(() => {
    onChange(!isChecked);
  }, [isChecked, onChange]);

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={checkboxId}
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={checkboxId}>
        {isChecked ? "Done" : "Open"}
      </label>
    </div>
  );
};
