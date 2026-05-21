export const getUserId = (user) => user?._id || user?.id || user?.email;

export const getUserIdentity = (user) => user?.email || getUserId(user);

export const getConversationKey = (currentUser, selectedUser) => {
  const ids = [getUserIdentity(currentUser), getUserIdentity(selectedUser)]
    .filter(Boolean)
    .sort();
  return ids.length === 2 ? `conversation:${ids.join(":")}` : null;
};

export const getInitials = (name = "", email = "") => {
  const source = name || email || "U";
  const parts = source.trim().split(/\s+/).filter(Boolean);

  if (parts.length < 2) {
    return source.slice(0, 2).toUpperCase();
  }

  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

export const getProfileImageUrl = (user) => {
  const profileImage = user?.profileImage;
  const url = profileImage?.url;

  if (!url || profileImage?.public_id === "noImage") return undefined;

  const isGoogleImage =
    profileImage?.public_id === "google-oauth" ||
    url.includes("googleusercontent.com");

  return isGoogleImage ? url : undefined;
};

export const formatMessageTime = (dateValue) => {
  if (!dateValue) return "";

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const normalizeMessages = (messages = []) =>
  messages.map((message) => ({
    sid: message.sid || message.messageSid || `${message.author}-${message.dateCreated || Date.now()}`,
    author: message.author,
    body: message.body || message.message || "",
    dateCreated: message.dateCreated || message.createdAt || new Date().toISOString(),
  })).sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated));
