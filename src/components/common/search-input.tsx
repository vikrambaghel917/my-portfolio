import { SearchIcon, XIcon } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchInput({
  value,
  onChange,
  placeholder = "Search",
}: SearchInputProps) {
  return (
    <div className="relative flex-1">
      <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-11 rounded-2xl pr-10 pl-9"
        aria-label={placeholder}
      />
      {value ? (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="absolute top-1/2 right-2 -translate-y-1/2"
          onClick={() => onChange("")}
        >
          <XIcon />
          <span className="sr-only">Clear search</span>
        </Button>
      ) : null}
    </div>
  );
}
