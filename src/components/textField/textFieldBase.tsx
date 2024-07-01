interface TextFieldBaseProps {
  value: string;
  onChange: (value: string) => void;
}

function TextFieldBase({ value, onChange }: TextFieldBaseProps) {
  return (
    <input
      type="text"
      className="w-fit min-w-60 rounded-md px-4 py-1 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-cyan-600"
      placeholder="Filter podcast..."
      value={value}
      onChange={(value) => {
        onChange(value.target.value);
      }}
    />
  );
}

export default TextFieldBase;
