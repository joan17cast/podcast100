interface TextFieldBaseProps {
  value: string;
  onChange: (value: string) => void;
}

function TextFieldBase({ value, onChange }: TextFieldBaseProps) {
  return (
    <div className="w-full flex items-center gap-4">
      <label>Search</label>
      <input
        type="text"
        className="w-full rounded-md px-4 py-1 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-cyan-600 min-w-60"
        placeholder="Author or podcast name"
        value={value}
        onChange={(value) => {
          onChange(value.target.value);
        }}
      />
    </div>
  );
}

export default TextFieldBase;
