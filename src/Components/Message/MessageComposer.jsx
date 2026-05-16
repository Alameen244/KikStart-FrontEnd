import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

const MessageComposer = ({ value, disabled, isSending, onChange, onSubmit }) => (
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
    <IconButton aria-label="Add emoji" size="small" disabled>
      <EmojiEmotionsOutlinedIcon fontSize="small" />
    </IconButton>
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

export default MessageComposer;

const ComposerForm = styled("form")(({ theme }) => ({
  height: "62px",
  margin: "0 22px 20px",
  padding: "0 8px 0 16px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  borderRadius: "999px",
  border: "1px solid #dedede",
  backgroundColor: "#fff",
  ".MuiInputBase-root": {
    flex: 1,
    minWidth: 0,
    fontSize: "0.82rem",
  },
  ".MuiIconButton-root": {
    color: theme.palette.myRed,
  },
  ".MuiIconButton-root.Mui-disabled": {
    color: "#d5a1a1",
  },
  ".send-button": {
    width: 36,
    height: 36,
  },
}));
