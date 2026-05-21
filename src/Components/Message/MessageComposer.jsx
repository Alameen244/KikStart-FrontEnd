import { useEffect, useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from "emoji-picker-react";
import { styled } from "@mui/material/styles";

const MessageComposer = ({ value, disabled, isSending, onChange, onSubmit }) => {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const emojiWrapRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!emojiWrapRef.current?.contains(event.target)) {
        setIsEmojiOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (disabled) {
      setIsEmojiOpen(false);
    }
  }, [disabled]);

  const handleEmojiClick = (emojiData) => {
    onChange(`${value}${emojiData?.emoji || ""}`);
    setIsEmojiOpen(false);
  };

  return (
    <ComposerForm onSubmit={onSubmit}>
      <InputBase
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Type A Message..."
        inputProps={{ "aria-label": "Type a message" }}
      />
      <IconButton aria-label="Attach file" size="small" disabled>
        <AttachFileIcon fontSize="small" />
      </IconButton>
      <EmojiWrap ref={emojiWrapRef}>
        {isEmojiOpen && (
          <PickerPanel>
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              height={350}
              width={310}
              previewConfig={{ showPreview: false }}
              searchDisabled={false}
              skinTonesDisabled
            />
          </PickerPanel>
        )}
        <IconButton
          aria-label="Add emoji"
          type="button"
          size="small"
          disabled={disabled}
          className={isEmojiOpen ? "emoji-button active" : "emoji-button"}
          onClick={() => setIsEmojiOpen((prev) => !prev)}
        >
          <EmojiEmotionsOutlinedIcon fontSize="small" />
        </IconButton>
      </EmojiWrap>
      <IconButton
        aria-label="Send message"
        type="submit"
        size="small"
        disabled={disabled || isSending || !value.trim()}
        className="send-button"
      >
        <SendIcon fontSize="small" />
      </IconButton>
    </ComposerForm>
  );
};

export default MessageComposer;

const ComposerForm = styled("form")(({ theme }) => ({
  position: "relative",
  height: "64px",
  margin: "0 24px 22px",
  padding: "0 10px 0 18px",
  display: "flex",
  alignItems: "center",
  gap: "7px",
  borderRadius: "999px",
  border: "1px solid #efdada",
  backgroundColor: "#fff",
  boxShadow: "0 16px 34px rgba(43, 43, 43, 0.06)",
  ".MuiInputBase-root": {
    flex: 1,
    minWidth: 0,
    fontSize: "0.82rem",
  },
  ".MuiIconButton-root": {
    color: theme.palette.myRed,
  },
  ".MuiIconButton-root:hover": {
    backgroundColor: "#fff1f1",
  },
  ".MuiIconButton-root.Mui-disabled": {
    color: "#d5a1a1",
  },
  ".emoji-button.active": {
    backgroundColor: "#fff1f1",
    color: "#d71920",
  },
  ".send-button": {
    width: 40,
    height: 40,
    backgroundColor: theme.palette.myRed,
    color: "#fff",
  },
  ".send-button:hover": {
    backgroundColor: "#d71920",
  },
  ".send-button.Mui-disabled": {
    backgroundColor: "#f3c8c8",
    color: "#fff",
  },
}));

const EmojiWrap = styled("div")({
  position: "relative",
  display: "flex",
});

const PickerPanel = styled("div")({
  position: "absolute",
  right: "-44px",
  bottom: "52px",
  zIndex: 20,
  padding: "8px",
  borderRadius: "18px",
  backgroundColor: "#fff",
  border: "1px solid #efdada",
  boxShadow: "0 22px 50px rgba(43, 43, 43, 0.16)",
  ".EmojiPickerReact": {
    border: "0 !important",
    boxShadow: "none !important",
    "--epr-bg-color": "#fff",
    "--epr-category-label-bg-color": "#fff7f7",
    "--epr-hover-bg-color": "#fff1f1",
    "--epr-focus-bg-color": "#ffe8e8",
    "--epr-highlight-color": "#ED1C24",
    "--epr-search-border-color": "#efdada",
    "--epr-search-input-bg-color": "#fffafa",
    "--epr-text-color": "#2B2B2B",
  },
});
