const SHEET_ID = "16vL6YT8n4_s4cJvCelmMsVyilYUtyKzNbKF990rt30M";
const SHEET_NAME = "TM Arcade Accounts";
const DM_SHEET_NAME = "TM Arcade DMs";
const GROUP_SHEET_NAME = "TM Arcade Groups";
const GROUP_MESSAGE_SHEET_NAME = "TM Arcade Group Messages";
const SCREEN_REWARD_SHEET_NAME = "TM Arcade Screen Rewards";
const FRIEND_SHEET_NAME = "TM Arcade Friends";
const TRANSFER_SHEET_NAME = "TM Arcade Transfers";
const SHOP_GIFT_SHEET_NAME = "TM Arcade Shop Gifts";
const TOURNAMENT_SHEET_NAME = "TM Arcade Weekly Tournaments";
const XP_CODE_SHEET_NAME = "TM Arcade XP Codes";
const XP_CODE_CLAIM_SHEET_NAME = "TM Arcade XP Code Claims";
const FEEDBACK_SHEET_NAME = "TM Arcade Feedback";
const UI_SETTINGS_SHEET_NAME = "TM Arcade UI Settings";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 365 * 100; // 100 years (effectively until logout)
const LOCK_UNTIL_ADMIN_UNLOCK_MS = 253402300799000; // 9999-12-31T23:59:59Z sentinel
const DEFAULT_GLOBAL_BANNER_TEXT =
  "\ud83d\udd25 This Site is 100% Free \u2014 No Paywalls. No Subscriptions. Just Games.";
const GLOBAL_BANNER_TEXT_SETTING_KEY = "global_banner_text";
const GLOBAL_BANNER_COLOR_A_SETTING_KEY = "global_banner_color_a";
const GLOBAL_BANNER_COLOR_B_SETTING_KEY = "global_banner_color_b";
const GLOBAL_BANNER_ACCENT_SETTING_KEY = "global_banner_accent";
const ACCOUNT_CACHE_KEY = "tm_accounts_cache_v1";
const ACCOUNT_CACHE_TTL_SECONDS = 10;
const FRIEND_CACHE_KEY = "tm_friends_cache_v1";
const FRIEND_CACHE_TTL_SECONDS = 10;
const XP_CODE_CACHE_KEY = "tm_xp_codes_cache_v1";
const XP_CODE_CACHE_TTL_SECONDS = 12;
const XP_CODE_CLAIM_CACHE_KEY = "tm_xp_code_claims_cache_v1";
const XP_CODE_CLAIM_CACHE_TTL_SECONDS = 12;
const TOURNAMENT_CHECK_CACHE_PREFIX = "tm_tournament_checked_";
const TOURNAMENT_CHECK_CACHE_TTL_SECONDS = 180;
const RECENT_SCAN_CHUNK_ROWS = 400;
const RECENT_DM_SCAN_MAX_ROWS = 8000;
const RECENT_GROUP_SCAN_MAX_ROWS = 8000;
const RECENT_TRANSFER_SCAN_MAX_ROWS = 5000;
const ACCOUNT_HEADERS = [
  "username",
  "display_name",
  "password_hash",
  "role",
  "created_at",
  "updated_at",
  "session_token",
  "session_expires_at",
  "disabled",
  "profile_json",
  "password_plain",
  "lock_until_ms",
  "lock_message",
  "lock_set_by",
  "lock_set_at",
];
const DM_HEADERS = [
  "id",
  "from_username",
  "to_username",
  "body",
  "created_at",
];
const GROUP_HEADERS = [
  "id",
  "name",
  "created_by",
  "participants_json",
  "created_at",
  "updated_at",
  "disabled",
];
const GROUP_MESSAGE_HEADERS = [
  "id",
  "group_id",
  "from_username",
  "body",
  "created_at",
];
const SCREEN_REWARD_HEADERS = [
  "id",
  "target_username",
  "label",
  "message",
  "xp",
  "tm",
  "streak",
  "rank",
  "created_by",
  "created_at",
  "expires_at",
  "claimed_by",
  "claimed_at",
  "disabled",
];
const FRIEND_HEADERS = [
  "id",
  "user_a",
  "user_b",
  "requester",
  "status",
  "created_at",
  "updated_at",
  "acted_by",
  "disabled",
];
const TRANSFER_HEADERS = [
  "id",
  "from_username",
  "to_username",
  "amount",
  "note",
  "created_at",
  "disabled",
];
const SHOP_GIFT_HEADERS = [
  "id",
  "from_username",
  "to_username",
  "item_id",
  "item_name",
  "item_type",
  "price_tm",
  "created_at",
  "disabled",
];
const TOURNAMENT_HEADERS = [
  "week_key",
  "week_start",
  "week_end",
  "first_username",
  "second_username",
  "third_username",
  "first_tm",
  "second_tm",
  "third_tm",
  "processed_at",
  "total_players",
];
const XP_CODE_HEADERS = [
  "id",
  "code",
  "code_key",
  "xp_amount",
  "created_by",
  "created_at",
  "expires_at",
  "disabled",
];
const XP_CODE_CLAIM_HEADERS = [
  "id",
  "code_id",
  "code_key",
  "username",
  "claimed_at",
];
const FEEDBACK_HEADERS = [
  "id",
  "username",
  "display_name",
  "name",
  "email",
  "phone",
  "rating",
  "feedback",
  "status",
  "admin_note",
  "created_at",
  "updated_at",
  "updated_by",
  "disabled",
];
const UI_SETTINGS_HEADERS = ["key", "value", "updated_at", "updated_by"];
const WEEKLY_TOURNAMENT_PRIZES = [1000, 500, 100];

function doPost(e) {
  try {
    const data = parseRequest_(e);
    const action = String(data.action || "").trim();
    if (!action) return jsonResponse_({ success: false, message: "Missing action." });

    switch (action) {
      case "register":
        return registerUser_(data);
      case "login":
        return loginUser_(data);
      case "session":
        return getSessionUser_(data);
      case "logout":
        return logoutUser_(data);
      case "getGlobalBanner":
        return getGlobalBanner_(data);
      case "getProfile":
        return getProfile_(data);
      case "saveProfile":
        return saveProfile_(data);
      case "setDisplayName":
        return setDisplayName_(data);
      case "adminSaveGlobalBanner":
        return adminSaveGlobalBanner_(data);
      case "adminListAccounts":
        return adminListAccounts_(data);
      case "adminSetRole":
        return adminSetRole_(data);
      case "adminDeleteAccount":
        return adminDeleteAccount_(data);
      case "adminSetAccountLock":
        return adminSetAccountLock_(data);
      case "adminClearAccountLock":
        return adminClearAccountLock_(data);
      case "adminSetDisplayName":
        return adminSetDisplayName_(data);
      case "adminGrantProfile":
        return adminGrantProfile_(data);
      case "adminCreateScreenReward":
        return adminCreateScreenReward_(data);
      case "adminCreateXpCode":
        return adminCreateXpCode_(data);
      case "adminDeleteXpCode":
        return adminDeleteXpCode_(data);
      case "adminListXpCodes":
        return adminListXpCodes_(data);
      case "getScreenRewards":
        return getScreenRewards_(data);
      case "claimScreenReward":
        return claimScreenReward_(data);
      case "redeemXpCode":
        return redeemXpCode_(data);
      case "getLeaderboard":
        return getLeaderboard_(data);
      case "sendDirectMessage":
        return sendDirectMessage_(data);
      case "getDirectMessages":
        return getDirectMessages_(data);
      case "createGroupChat":
        return createGroupChat_(data);
      case "getChatInbox":
        return getChatInbox_(data);
      case "getChatThread":
        return getChatThread_(data);
      case "sendChatMessage":
        return sendChatMessage_(data);
      case "getFriendsDashboard":
        return getFriendsDashboard_(data);
      case "sendFriendRequest":
        return sendFriendRequest_(data);
      case "respondFriendRequest":
        return respondFriendRequest_(data);
      case "removeFriend":
        return removeFriend_(data);
      case "sendTmTransfer":
        return sendTmTransfer_(data);
      case "getTmTransfers":
        return getTmTransfers_(data);
      case "submitFeedback":
        return submitFeedback_(data);
      case "getFeedbackDashboard":
        return getFeedbackDashboard_(data);
      case "adminUpdateFeedback":
        return adminUpdateFeedback_(data);
      case "adminDeleteFeedback":
        return adminDeleteFeedback_(data);
      default:
        return jsonResponse_({ success: false, message: "Invalid action." });
    }
  } catch (error) {
    return jsonResponse_({ success: false, message: "Server error.", detail: String(error.message || error) });
  }
}

function doGet(e) {
  const action = String((e && e.parameter && e.parameter.action) || "").trim();
  if (action === "health") {
    return jsonResponse_({
      success: true,
      service: "tm-arcade-auth",
      timestamp: new Date().toISOString(),
    });
  }
  return jsonResponse_({ success: false, message: "Use POST with an action." });
}

function registerUser_(payload) {
  const sheet = getAccountSheet_();
  const accounts = readAccountsCached_(sheet);

  const username = normalizeUsername_(payload.username);
  const displayName = sanitizeDisplayName_(payload.displayName || payload.username);
  const password = String(payload.password || "");
  if (!username) return jsonResponse_({ success: false, message: "Username must be 3-24 letters, numbers, . _ or -." });
  if (password.length < 4) return jsonResponse_({ success: false, message: "Password must be at least 4 characters." });
  if (accounts.some((entry) => entry.usernameLower === username.toLowerCase())) {
    return jsonResponse_({ success: false, message: "Username is already taken." });
  }

  const nowMs = Date.now();
  const nowIso = new Date(nowMs).toISOString();
  const token = createSessionToken_();
  const sessionExpiresAt = String(nowMs + SESSION_TTL_MS);
  const isFirstAccount = accounts.length === 0;
  const role = isFirstAccount ? "admin" : "user";
  const row = [
    username,
    displayName,
    hashPassword_(password),
    role,
    nowIso,
    nowIso,
    token,
    sessionExpiresAt,
    "0",
    JSON.stringify(defaultProfile_()),
    password,
    "",
    "",
    "",
    "",
  ];
  sheet.appendRow(row);
  clearAccountsCache_();

  return jsonResponse_({
    success: true,
    message: "Account created.",
    token: token,
    user: {
      username: username,
      displayName: displayName,
      role: role,
      admin: role === "admin",
    },
    profile: defaultProfile_(),
    hasProfile: true,
    globalBanner: readGlobalBannerConfig_(),
  });
}

function loginUser_(payload) {
  const sheet = getAccountSheet_();
  const accounts = readAccountsCached_(sheet);
  const username = normalizeUsername_(payload.username);
  const password = String(payload.password || "");
  if (!username || !password) {
    return jsonResponse_({ success: false, message: "Username and password are required." });
  }

  const account = accounts.find((entry) => entry.usernameLower === username.toLowerCase());
  if (!account || account.disabled) {
    return jsonResponse_({ success: false, message: "Invalid username or password." });
  }

  const hashedInput = hashPassword_(password);
  let passwordOk = safeEquals_(account.passwordHash, hashedInput);

  // Backward compatibility: if an old plain-text password exists in legacy data, accept once and upgrade.
  if (!passwordOk && safeEquals_(account.passwordHash, password)) {
    passwordOk = true;
    account.passwordHash = hashedInput;
  }

  if (!passwordOk) {
    return jsonResponse_({ success: false, message: "Invalid username or password." });
  }

  const nowMs = Date.now();
  const activeLock = getActiveAccountLock_(account, nowMs);
  if (!activeLock.locked && parseLockUntilMs_(account.lockUntilMs) > 0) {
    clearAccountLockFields_(account);
    account.updatedAt = new Date(nowMs).toISOString();
  }

  account.updatedAt = new Date(nowMs).toISOString();
  account.sessionToken = createSessionToken_();
  account.sessionExpiresAt = String(nowMs + SESSION_TTL_MS);
  account.passwordPlain = password;
  writeAccountRow_(sheet, account);

  return jsonResponse_({
    success: true,
    token: account.sessionToken,
    user: {
      username: account.username,
      displayName: account.displayName || account.username,
      role: account.role,
      admin: account.role === "admin",
    },
    profile: account.profile,
    hasProfile: account.hasProfile,
    lock: buildAccountLockPayload_(activeLock),
    globalBanner: readGlobalBannerConfig_(),
  });
}

function getSessionUser_(payload) {
  const auth = requireSession_(payload, false, { allowLocked: true });
  if (!auth.success) return jsonResponse_(auth);

  const lockState = auth.lockState || getActiveAccountLock_(auth.account, Date.now());
  return jsonResponse_({
    success: true,
    user: {
      username: auth.account.username,
      displayName: auth.account.displayName || auth.account.username,
      role: auth.account.role,
      admin: auth.account.role === "admin",
    },
    profile: auth.account.profile,
    hasProfile: auth.account.hasProfile,
    lock: buildAccountLockPayload_(lockState),
    globalBanner: readGlobalBannerConfig_(),
  });
}

function logoutUser_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  auth.account.sessionToken = "";
  auth.account.sessionExpiresAt = "";
  auth.account.updatedAt = new Date().toISOString();
  writeAccountRow_(auth.sheet, auth.account);
  return jsonResponse_({ success: true });
}

function getGlobalBanner_(payload) {
  const auth = requireSession_(payload, false, { allowLocked: true });
  if (!auth.success) return jsonResponse_(auth);
  return jsonResponse_({
    success: true,
    banner: readGlobalBannerConfig_(),
  });
}

function adminSaveGlobalBanner_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const resetRequested = payload.reset === true || String(payload.reset || "").trim().toLowerCase() === "true";
  const textValue = sanitizeGlobalBannerText_(payload.text || payload.bannerText || payload.message || "");

  const config = resetRequested
    ? {
        text: DEFAULT_GLOBAL_BANNER_TEXT,
      }
    : {
        text: textValue || DEFAULT_GLOBAL_BANNER_TEXT,
      };

  writeGlobalBannerConfig_(config, auth.account.username);
  return jsonResponse_({
    success: true,
    message: resetRequested ? "Global banner reset to default." : "Global banner updated.",
    banner: readGlobalBannerConfig_(),
  });
}

function getProfile_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);
  return jsonResponse_({
    success: true,
    profile: auth.account.profile,
    hasProfile: auth.account.hasProfile,
  });
}

function saveProfile_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);
  auth.account.profile = normalizeProfile_(payload.profile);
  auth.account.hasProfile = true;
  auth.account.updatedAt = new Date().toISOString();
  writeAccountRow_(auth.sheet, auth.account);
  return jsonResponse_({ success: true, profile: auth.account.profile, hasProfile: true });
}

function setDisplayName_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const displayName = sanitizeDisplayName_(payload.displayName || payload.name || "");
  auth.account.displayName = displayName;
  auth.account.updatedAt = new Date().toISOString();
  writeAccountRow_(auth.sheet, auth.account);

  return jsonResponse_({
    success: true,
    message: "Display name updated.",
    user: {
      username: auth.account.username,
      displayName: auth.account.displayName || auth.account.username,
      role: auth.account.role,
      admin: auth.account.role === "admin",
    },
  });
}

function adminListAccounts_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const nowMs = Date.now();
  const list = auth.accounts
    .filter((entry) => !entry.disabled)
    .map((entry) => {
      const expiryMs = Number(entry.sessionExpiresAt || 0);
      const online = Boolean(entry.sessionToken && Number.isFinite(expiryMs) && expiryMs > nowMs);
      const lockState = getActiveAccountLock_(entry, nowMs);
      return {
        username: entry.username,
        displayName: entry.displayName || entry.username,
        role: entry.role,
        admin: entry.role === "admin",
        createdAt: entry.createdAt || "",
        updatedAt: entry.updatedAt || "",
        online: online,
        xp: entry.profile.xp,
        rank: entry.profile.rank,
        tm: entry.profile.tm,
        streak: entry.profile.streak,
        password: entry.passwordPlain || entry.passwordHash || "",
        passwordType: entry.passwordPlain ? "plain" : entry.passwordHash ? "hash" : "none",
        passwordHash: entry.passwordHash || "",
        locked: lockState.locked,
        lockUntilMs: lockState.untilMs,
        lockUntil: lockState.untilMs && !lockState.untilAdminUnlock ? new Date(lockState.untilMs).toISOString() : "",
        lockUntilAdminUnlock: lockState.untilAdminUnlock,
        lockMessage: lockState.message || "",
        lockSetBy: String(entry.lockSetBy || "").trim(),
        lockSetAt: String(entry.lockSetAt || "").trim(),
      };
    })
    .sort((a, b) => a.username.localeCompare(b.username));

  return jsonResponse_({ success: true, accounts: list });
}

function adminSetRole_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const targetUsername = normalizeUsername_(payload.targetUsername);
  const role = String(payload.role || "").toLowerCase() === "admin" ? "admin" : "user";
  if (!targetUsername) return jsonResponse_({ success: false, message: "Invalid target username." });

  const target = auth.accounts.find((entry) => entry.usernameLower === targetUsername.toLowerCase());
  if (!target || target.disabled) return jsonResponse_({ success: false, message: "Account not found." });

  if (target.usernameLower === auth.account.usernameLower && role !== "admin") {
    return jsonResponse_({ success: false, message: "You cannot remove your own admin role." });
  }

  if (target.role === "admin" && role !== "admin") {
    const activeAdminCount = auth.accounts.filter((entry) => !entry.disabled && entry.role === "admin").length;
    if (activeAdminCount <= 1) {
      return jsonResponse_({ success: false, message: "At least one admin account is required." });
    }
  }

  target.role = role;
  target.updatedAt = new Date().toISOString();
  writeAccountRow_(auth.sheet, target);
  return jsonResponse_({ success: true, message: "Role updated." });
}

function adminDeleteAccount_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const targetUsername = normalizeUsername_(payload.targetUsername);
  if (!targetUsername) return jsonResponse_({ success: false, message: "Invalid target username." });

  const target = auth.accounts.find((entry) => entry.usernameLower === targetUsername.toLowerCase());
  if (!target || target.disabled) return jsonResponse_({ success: false, message: "Account not found." });
  if (target.usernameLower === auth.account.usernameLower) {
    return jsonResponse_({ success: false, message: "You cannot delete your own account." });
  }

  if (target.role === "admin") {
    const activeAdminCount = auth.accounts.filter((entry) => !entry.disabled && entry.role === "admin").length;
    if (activeAdminCount <= 1) {
      return jsonResponse_({ success: false, message: "At least one admin account is required." });
    }
  }

  auth.sheet.deleteRow(target.rowNumber);
  return jsonResponse_({ success: true, message: "Account deleted from Google Sheet." });
}

function adminSetAccountLock_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const targetUsername = normalizeUsername_(payload.targetUsername || payload.username);
  if (!targetUsername) return jsonResponse_({ success: false, message: "Invalid target username." });

  const target = auth.accounts.find((entry) => entry.usernameLower === targetUsername.toLowerCase());
  if (!target || target.disabled) return jsonResponse_({ success: false, message: "Account not found." });
  if (target.usernameLower === auth.account.usernameLower) {
    return jsonResponse_({ success: false, message: "You cannot lock your own account." });
  }
  if (target.role === "admin") {
    return jsonResponse_({ success: false, message: "Admin accounts cannot be parental locked." });
  }

  const untilAdminUnlock =
    payload.untilAdminUnlock === true || String(payload.untilAdminUnlock || "").trim().toLowerCase() === "true";
  const minutesRaw = parseNonNegativeInt_(payload.minutes || payload.durationMinutes || payload.duration);
  const minutes = minutesRaw === null ? 30 : Math.min(10080, Math.max(1, minutesRaw));
  const message = sanitizeLockMessage_(payload.message || payload.reason || "");
  const nowMs = Date.now();
  const nowIso = new Date(nowMs).toISOString();
  const untilMs = untilAdminUnlock ? LOCK_UNTIL_ADMIN_UNLOCK_MS : nowMs + minutes * 60000;

  target.lockUntilMs = String(untilMs);
  target.lockMessage = message || "Take a break and come back later.";
  target.lockSetBy = auth.account.username;
  target.lockSetAt = nowIso;
  target.sessionToken = "";
  target.sessionExpiresAt = "";
  target.updatedAt = nowIso;
  writeAccountRow_(auth.sheet, target);

  return jsonResponse_({
    success: true,
    message: untilAdminUnlock
      ? `${target.username} locked until an admin unlocks.`
      : `${target.username} locked for ${minutes} minute${minutes === 1 ? "" : "s"}.`,
    target: {
      username: target.username,
      lockUntilMs: untilMs,
      lockUntil: new Date(untilMs).toISOString(),
      lockMessage: target.lockMessage,
      lockSetBy: target.lockSetBy,
      lockSetAt: target.lockSetAt,
      lockUntilAdminUnlock: untilAdminUnlock,
      locked: true,
    },
  });
}

function adminClearAccountLock_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const targetUsername = normalizeUsername_(payload.targetUsername || payload.username);
  if (!targetUsername) return jsonResponse_({ success: false, message: "Invalid target username." });

  const target = auth.accounts.find((entry) => entry.usernameLower === targetUsername.toLowerCase());
  if (!target || target.disabled) return jsonResponse_({ success: false, message: "Account not found." });

  clearAccountLockFields_(target);
  target.updatedAt = new Date().toISOString();
  writeAccountRow_(auth.sheet, target);

  return jsonResponse_({
    success: true,
    message: `${target.username} unlocked.`,
    target: {
      username: target.username,
      locked: false,
    },
  });
}

function adminSetDisplayName_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const targetUsername = normalizeUsername_(payload.targetUsername);
  if (!targetUsername) return jsonResponse_({ success: false, message: "Invalid target username." });

  const target = auth.accounts.find((entry) => entry.usernameLower === targetUsername.toLowerCase());
  if (!target || target.disabled) return jsonResponse_({ success: false, message: "Account not found." });

  const displayName = sanitizeDisplayName_(payload.displayName || payload.name || target.username);
  target.displayName = displayName;
  target.updatedAt = new Date().toISOString();
  writeAccountRow_(auth.sheet, target);

  const targetUser = {
    username: target.username,
    displayName: target.displayName || target.username,
    role: target.role,
    admin: target.role === "admin",
  };

  return jsonResponse_({
    success: true,
    message: "Display name updated.",
    target: targetUser,
    user: target.usernameLower === auth.account.usernameLower ? targetUser : null,
  });
}

function adminGrantProfile_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const targetUsername = normalizeUsername_(payload.targetUsername);
  if (!targetUsername) return jsonResponse_({ success: false, message: "Invalid target username." });

  const target = auth.accounts.find((entry) => entry.usernameLower === targetUsername.toLowerCase());
  if (!target || target.disabled) return jsonResponse_({ success: false, message: "Account not found." });

  const fieldRaw = String(payload.field || "").trim().toLowerCase();
  const mode = String(payload.mode || "add").trim().toLowerCase();
  const profile = normalizeProfile_(target.profile);
  let message = "";

  if (fieldRaw === "rank") {
    if (mode !== "set") {
      return jsonResponse_({ success: false, message: "Rank can only be set directly." });
    }
    const rankValue = String(payload.value || payload.rank || "")
      .trim()
      .slice(0, 40);
    if (!rankValue) return jsonResponse_({ success: false, message: "Rank is required." });
    profile.rank = rankValue;
    message = "Rank updated.";
  } else {
    const field = normalizeNumericAdminField_(fieldRaw);
    if (!field) return jsonResponse_({ success: false, message: "Invalid profile field." });

    const amount = parseNonNegativeInt_(payload.value);
    if (amount === null) return jsonResponse_({ success: false, message: "A valid number is required." });

    const currentValue = parseNonNegativeInt_(profile[field]) || 0;
    let nextValue = currentValue;
    if (mode === "add") nextValue = currentValue + amount;
    else if (mode === "remove") nextValue = Math.max(0, currentValue - amount);
    else if (mode === "set") nextValue = amount;
    else return jsonResponse_({ success: false, message: "Invalid update mode." });

    profile[field] = nextValue;
    message = "Profile updated.";
  }

  target.profile = normalizeProfile_(profile);
  target.hasProfile = true;
  target.updatedAt = new Date().toISOString();
  writeAccountRow_(auth.sheet, target);

  return jsonResponse_({
    success: true,
    message: message,
    target: {
      username: target.username,
      displayName: target.displayName || target.username,
      profile: target.profile,
    },
  });
}

function adminCreateScreenReward_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const targetScope = String(payload.targetScope || payload.scope || "")
    .trim()
    .toLowerCase();
  const rawTarget = String(payload.targetUsername || payload.username || "")
    .trim()
    .toLowerCase();
  const sendToAllFlag =
    payload.sendToAll === true || String(payload.sendToAll || "").trim().toLowerCase() === "true";
  const sendToAll =
    sendToAllFlag ||
    targetScope === "all" ||
    rawTarget === "all" ||
    rawTarget === "@all" ||
    rawTarget === "everyone" ||
    rawTarget === "*";

  const label = sanitizeScreenRewardLabel_(payload.label || payload.buttonLabel || payload.title || "");
  if (!label || label.length < 2) {
    return jsonResponse_({ success: false, message: "Button label must be at least 2 characters." });
  }

  const message = sanitizeScreenRewardMessage_(payload.message || payload.description || "");
  const xpRaw = parseNonNegativeInt_(payload.xp);
  const tmRaw = parseNonNegativeInt_(payload.tm !== undefined ? payload.tm : payload.money);
  const streakRaw = parseNonNegativeInt_(payload.streak);
  const xpGain = xpRaw === null ? 0 : xpRaw;
  const tmGain = tmRaw === null ? 0 : tmRaw;
  const streakGain = streakRaw === null ? 0 : streakRaw;
  const rankValue = String(payload.rank || "")
    .trim()
    .slice(0, 40);

  if (xpGain <= 0 && tmGain <= 0 && streakGain <= 0 && !rankValue && !message) {
    return jsonResponse_({ success: false, message: "Set a message or at least one reward value." });
  }

  const expiryRaw = parseNonNegativeInt_(payload.expiresMinutes || payload.expiryMinutes || payload.ttlMinutes);
  const expiresMinutes = expiryRaw === null ? 180 : Math.min(10080, Math.max(1, expiryRaw));
  const nowMs = Date.now();
  const nowIso = new Date(nowMs).toISOString();
  const expiresIso = new Date(nowMs + expiresMinutes * 60000).toISOString();

  let targets = [];
  if (sendToAll) {
    const unique = {};
    auth.accounts.forEach((entry) => {
      if (!entry || entry.disabled) return;
      const usernameLower = normalizeUsername_(entry.usernameLower || entry.username);
      if (!usernameLower || unique[usernameLower]) return;
      unique[usernameLower] = true;
      targets.push(entry);
    });
    targets.sort((a, b) => String(a.username || "").localeCompare(String(b.username || "")));
    if (!targets.length) {
      return jsonResponse_({ success: false, message: "No active accounts were found for send-to-all." });
    }
  } else {
    const targetUsername = normalizeUsername_(payload.targetUsername || payload.username);
    if (!targetUsername) return jsonResponse_({ success: false, message: "Invalid target username." });
    const target = auth.accounts.find((entry) => entry.usernameLower === targetUsername.toLowerCase());
    if (!target || target.disabled) return jsonResponse_({ success: false, message: "Target account not found." });
    targets = [target];
  }

  const rewardRows = [];
  const rewardIds = [];
  targets.forEach((target) => {
    const rewardId = createMessageId_("srw");
    rewardIds.push(rewardId);
    rewardRows.push([
      rewardId,
      target.username,
      label,
      message,
      String(xpGain),
      String(tmGain),
      String(streakGain),
      rankValue,
      auth.account.username,
      nowIso,
      expiresIso,
      "",
      "",
      "0",
    ]);
  });

  const rewardSheet = getScreenRewardSheet_();
  const startRow = rewardSheet.getLastRow() + 1;
  rewardSheet.getRange(startRow, 1, rewardRows.length, SCREEN_REWARD_HEADERS.length).setValues(rewardRows);

  return jsonResponse_({
    success: true,
    message: sendToAll ? `Screen reward button sent to ${targets.length} players.` : "Screen reward button sent.",
    sentToAll: sendToAll,
    sentCount: targets.length,
    targets: targets.map((entry) => entry.username),
    rewardIds: rewardIds,
    reward: {
      id: rewardIds[0] || "",
      targetUsername: targets[0] ? targets[0].username : "",
      label: label,
      message: message,
      xp: xpGain,
      tm: tmGain,
      streak: streakGain,
      rank: rankValue,
      createdAt: nowIso,
      expiresAt: expiresIso,
    },
  });
}

function adminCreateXpCode_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const code = sanitizeXpCodeValue_(payload.code || payload.value || payload.name);
  if (!code) {
    return jsonResponse_({ success: false, message: "Code must be 4-32 characters using letters, numbers, - or _." });
  }

  const xpRaw = parseNonNegativeInt_(payload.xp || payload.amount || payload.valueXp);
  if (xpRaw === null || xpRaw <= 0) {
    return jsonResponse_({ success: false, message: "XP amount must be greater than 0." });
  }
  const xpAmount = Math.min(1000000000, xpRaw);

  const expiryInput = payload.expiresAt || payload.dueAt || payload.dueDate || payload.expiry;
  const expiresAtMs = parseFutureDateMs_(expiryInput);
  if (!Number.isFinite(expiresAtMs)) {
    return jsonResponse_({ success: false, message: "Set a valid due date/time in the future." });
  }
  const nowMs = Date.now();
  if (expiresAtMs <= nowMs) {
    return jsonResponse_({ success: false, message: "Due date/time must be in the future." });
  }

  const sheet = getXpCodeSheet_();
  const codes = readXpCodesCached_(sheet, { forceFresh: true });
  const existing = codes.find((entry) => !entry.disabled && entry.codeKey === code);
  if (existing) {
    return jsonResponse_({ success: false, message: "That XP code already exists." });
  }

  const nowIso = new Date(nowMs).toISOString();
  const expiresIso = new Date(expiresAtMs).toISOString();
  const codeId = createMessageId_("xpc");

  sheet.appendRow([codeId, code, code, String(xpAmount), auth.account.username, nowIso, expiresIso, "0"]);
  clearXpCodeCaches_();
  return jsonResponse_({
    success: true,
    message: `XP code ${code} created.`,
    code: {
      id: codeId,
      code: code,
      xpAmount: xpAmount,
      createdBy: auth.account.username,
      createdAt: nowIso,
      expiresAt: expiresIso,
      disabled: false,
      expired: false,
      claimCount: 0,
    },
  });
}

function adminDeleteXpCode_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const targetId = sanitizeXpCodeId_(payload.codeId || payload.id);
  const targetCode = sanitizeXpCodeValue_(payload.code || payload.value);
  if (!targetId && !targetCode) {
    return jsonResponse_({ success: false, message: "Pick a valid code to delete." });
  }

  const sheet = getXpCodeSheet_();
  const codes = readXpCodesCached_(sheet, { forceFresh: true });
  const target = codes.find((entry) => (targetId ? entry.id === targetId : entry.codeKey === targetCode));
  if (!target || target.disabled) {
    return jsonResponse_({ success: false, message: "XP code not found." });
  }

  sheet.getRange(target.rowNumber, 8, 1, 1).setValues([["1"]]);
  clearXpCodeCaches_();
  return jsonResponse_({
    success: true,
    message: `XP code ${target.code} deleted.`,
  });
}

function adminListXpCodes_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const nowMs = Date.now();
  const claims = readXpCodeClaimsCached_(getXpCodeClaimSheet_());
  const claimCounts = {};
  claims.forEach((entry) => {
    if (!entry.codeKey) return;
    claimCounts[entry.codeKey] = (claimCounts[entry.codeKey] || 0) + 1;
  });

  const codes = readXpCodesCached_(getXpCodeSheet_())
    .filter((entry) => !entry.disabled)
    .map((entry) => {
      const expired = Number.isFinite(entry.expiresAtMs) && entry.expiresAtMs <= nowMs;
      return {
        id: entry.id,
        code: entry.code,
        xpAmount: entry.xpAmount,
        createdBy: entry.createdBy,
        createdAt: entry.createdAt,
        expiresAt: entry.expiresAt,
        expired: expired,
        disabled: entry.disabled,
        claimCount: claimCounts[entry.codeKey] || 0,
      };
    })
    .sort((a, b) => {
      const aMs = Date.parse(a.expiresAt || "");
      const bMs = Date.parse(b.expiresAt || "");
      const aSort = Number.isFinite(aMs) ? aMs : Number.MAX_SAFE_INTEGER;
      const bSort = Number.isFinite(bMs) ? bMs : Number.MAX_SAFE_INTEGER;
      if (aSort !== bSort) return aSort - bSort;
      return a.code.localeCompare(b.code);
    });

  return jsonResponse_({ success: true, codes: codes });
}

function getScreenRewards_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const requestedLimit = parseNonNegativeInt_(payload.limit);
  const limit = requestedLimit === null ? 12 : Math.min(40, Math.max(1, requestedLimit));
  const nowMs = Date.now();

  const limited = readRecentScreenRewardsForUser_(getScreenRewardSheet_(), auth.account.usernameLower, limit, nowMs);
  return jsonResponse_({
    success: true,
    rewards: limited.map((entry) => ({
      id: entry.id,
      label: entry.label,
      message: entry.message,
      xp: entry.xp,
      tm: entry.tm,
      streak: entry.streak,
      rank: entry.rank,
      createdAt: entry.createdAt,
      expiresAt: entry.expiresAt,
      targetUsername: entry.targetUsername,
    })),
    totalRewards: limited.length,
  });
}

function claimScreenReward_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const rewardId = sanitizeScreenRewardId_(payload.rewardId || payload.id);
  if (!rewardId) return jsonResponse_({ success: false, message: "Invalid reward id." });

  const rewardSheet = getScreenRewardSheet_();
  const rewards = readScreenRewards_(rewardSheet);
  const reward = rewards.find((entry) => entry.id === rewardId);
  if (!reward) return jsonResponse_({ success: false, message: "Reward button not found." });
  if (reward.disabled) return jsonResponse_({ success: false, message: "Reward button is no longer active." });
  if (reward.targetLower !== auth.account.usernameLower) {
    return jsonResponse_({ success: false, message: "This reward button is not for your account." });
  }
  if (reward.claimedByLower) return jsonResponse_({ success: false, message: "Reward button already claimed." });

  const nowMs = Date.now();
  const nowIso = new Date(nowMs).toISOString();
  if (Number.isFinite(reward.expiresAtMs) && reward.expiresAtMs <= nowMs) {
    rewardSheet.getRange(reward.rowNumber, 14, 1, 1).setValues([["1"]]);
    return jsonResponse_({ success: false, message: "Reward button expired." });
  }

  const profile = normalizeProfile_(auth.account.profile);
  const baseXp = parseNonNegativeInt_(profile.xp);
  const baseTm = parseNonNegativeInt_(profile.tm);
  const baseStreak = parseNonNegativeInt_(profile.streak);
  profile.xp = (baseXp === null ? 0 : baseXp) + reward.xp;
  profile.tm = (baseTm === null ? 0 : baseTm) + reward.tm;
  profile.streak = (baseStreak === null ? 0 : baseStreak) + reward.streak;
  if (reward.rank) profile.rank = reward.rank;

  auth.account.profile = normalizeProfile_(profile);
  auth.account.hasProfile = true;
  auth.account.updatedAt = nowIso;
  writeAccountRow_(auth.sheet, auth.account);

  rewardSheet.getRange(reward.rowNumber, 12, 1, 3).setValues([[auth.account.username, nowIso, "1"]]);

  return jsonResponse_({
    success: true,
    message: "Reward claimed.",
    rewardId: reward.id,
    granted: {
      xp: reward.xp,
      tm: reward.tm,
      streak: reward.streak,
      rank: reward.rank,
    },
    profile: auth.account.profile,
  });
}

function redeemXpCode_(payload) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (_error) {
    return jsonResponse_({ success: false, message: "Another code redemption is in progress. Try again." });
  }

  try {
    const auth = requireSession_(payload, false);
    if (!auth.success) return jsonResponse_(auth);

    const codeValue = sanitizeXpCodeValue_(payload.code || payload.value || payload.name);
    if (!codeValue) return jsonResponse_({ success: false, message: "Enter a valid XP code." });

    const codeSheet = getXpCodeSheet_();
    const codes = readXpCodesCached_(codeSheet, { forceFresh: true });
    const codeEntry = codes.find((entry) => !entry.disabled && entry.codeKey === codeValue);
    if (!codeEntry) return jsonResponse_({ success: false, message: "Invalid code." });

    const nowMs = Date.now();
    if (Number.isFinite(codeEntry.expiresAtMs) && codeEntry.expiresAtMs <= nowMs) {
      return jsonResponse_({ success: false, message: "Code expired." });
    }

    const claimSheet = getXpCodeClaimSheet_();
    if (hasXpCodeClaimForUser_(claimSheet, codeEntry.codeKey, auth.account.usernameLower)) {
      return jsonResponse_({ success: false, message: "Code already used." });
    }

    const nowIso = new Date(nowMs).toISOString();
    claimSheet.appendRow([
      createMessageId_("xcl"),
      codeEntry.id,
      codeEntry.codeKey,
      auth.account.username,
      nowIso,
    ]);
    clearXpCodeCaches_();

    const profile = normalizeProfile_(auth.account.profile);
    const currentXp = parseNonNegativeInt_(profile.xp) || 0;
    profile.xp = currentXp + codeEntry.xpAmount;
    auth.account.profile = normalizeProfile_(profile);
    auth.account.hasProfile = true;
    auth.account.updatedAt = nowIso;
    writeAccountRow_(auth.sheet, auth.account);

    return jsonResponse_({
      success: true,
      message: `Redeemed +${codeEntry.xpAmount} XP!`,
      code: {
        id: codeEntry.id,
        code: codeEntry.code,
        xpAmount: codeEntry.xpAmount,
      },
      xpAward: codeEntry.xpAmount,
      profile: auth.account.profile,
    });
  } finally {
    lock.releaseLock();
  }
}

function getWeeklyTournamentWindow_() {
  const now = new Date();
  const utcMidnightMs = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const dayOfWeek = now.getUTCDay();
  const offsetToMonday = (dayOfWeek + 6) % 7;
  const weekStartMs = utcMidnightMs - offsetToMonday * 24 * 60 * 60 * 1000;
  const weekEndMs = weekStartMs + 7 * 24 * 60 * 60 * 1000;
  const weekStartIso = new Date(weekStartMs).toISOString();
  const weekEndIso = new Date(weekEndMs).toISOString();
  return {
    weekKey: "wk_" + weekStartIso.slice(0, 10),
    weekStart: weekStartIso,
    weekEnd: weekEndIso,
  };
}

function buildLeaderboardEntries_(accounts) {
  const sorted = accounts
    .filter((entry) => !entry.disabled)
    .map((entry) => {
      const profile = normalizeProfile_(entry.profile);
      return {
        username: entry.username,
        usernameLower: entry.usernameLower,
        displayName: entry.displayName || entry.username,
        xp: profile.xp,
        rank: profile.rank,
        tm: profile.tm,
        streak: profile.streak,
      };
    })
    .sort((a, b) => {
      if (b.xp !== a.xp) return b.xp - a.xp;
      if (b.tm !== a.tm) return b.tm - a.tm;
      return a.username.localeCompare(b.username);
    });

  let position = 0;
  let previousXp = null;
  return sorted.map((entry, index) => {
    if (previousXp === null || entry.xp < previousXp) {
      position = index + 1;
      previousXp = entry.xp;
    }
    return {
      position: position,
      username: entry.username,
      usernameLower: entry.usernameLower,
      displayName: entry.displayName,
      xp: entry.xp,
      rank: entry.rank,
      tm: entry.tm,
      streak: entry.streak,
    };
  });
}

function toLeaderboardPayloadEntry_(entry) {
  if (!entry) return null;
  return {
    position: entry.position,
    username: entry.username,
    displayName: entry.displayName,
    xp: entry.xp,
    rank: entry.rank,
    tm: entry.tm,
    streak: entry.streak,
  };
}

function serializeTournamentWinners_(winners, accountByLower) {
  return winners
    .filter((winner) => winner && winner.username && winner.tmReward > 0)
    .map((winner) => {
      const account = accountByLower[winner.username] || null;
      return {
        position: winner.position,
        username: account ? account.username : winner.username,
        displayName: account ? account.displayName || account.username : winner.username,
        tmReward: winner.tmReward,
      };
    });
}

function getTournamentSnapshot_(tournamentSheet, weekWindow, accounts) {
  const existing = readTournamentRows_(tournamentSheet).find((entry) => entry.weekKey === weekWindow.weekKey);
  if (!existing) {
    return {
      weekKey: weekWindow.weekKey,
      weekStart: weekWindow.weekStart,
      weekEnd: weekWindow.weekEnd,
      processedAt: "",
      processedNow: false,
      winners: [],
    };
  }

  const accountByLower = {};
  accounts.forEach((entry) => {
    if (!entry || entry.disabled) return;
    accountByLower[entry.usernameLower] = entry;
  });

  const winners = serializeTournamentWinners_(
    [
      { position: 1, username: existing.firstUsername, tmReward: existing.firstTm },
      { position: 2, username: existing.secondUsername, tmReward: existing.secondTm },
      { position: 3, username: existing.thirdUsername, tmReward: existing.thirdTm },
    ],
    accountByLower,
  );

  return {
    weekKey: weekWindow.weekKey,
    weekStart: weekWindow.weekStart,
    weekEnd: weekWindow.weekEnd,
    processedAt: existing.processedAt || "",
    processedNow: false,
    winners: winners,
  };
}

function applyWeeklyTournamentPayouts_(accountSheet, accounts, rankedEntries) {
  const weekWindow = getWeeklyTournamentWindow_();
  const tournamentSheet = getTournamentSheet_();
  const existing = readTournamentRows_(tournamentSheet).find((entry) => entry.weekKey === weekWindow.weekKey);
  const accountByLower = {};
  accounts.forEach((entry) => {
    if (!entry || entry.disabled) return;
    accountByLower[entry.usernameLower] = entry;
  });

  if (existing) {
    const existingWinners = serializeTournamentWinners_(
      [
        { position: 1, username: existing.firstUsername, tmReward: existing.firstTm },
        { position: 2, username: existing.secondUsername, tmReward: existing.secondTm },
        { position: 3, username: existing.thirdUsername, tmReward: existing.thirdTm },
      ],
      accountByLower,
    );
    return {
      weekKey: weekWindow.weekKey,
      weekStart: weekWindow.weekStart,
      weekEnd: weekWindow.weekEnd,
      processedAt: existing.processedAt || "",
      processedNow: false,
      winners: existingWinners,
    };
  }

  const nowIso = new Date().toISOString();
  const rawWinners = rankedEntries.slice(0, 3).map((entry, index) => {
    const reward = WEEKLY_TOURNAMENT_PRIZES[index] || 0;
    return {
      position: index + 1,
      username: entry.usernameLower,
      tmReward: reward,
    };
  });

  rawWinners.forEach((winner) => {
    const account = accountByLower[winner.username];
    if (!account || winner.tmReward <= 0) return;
    const profile = normalizeProfile_(account.profile);
    profile.tm = (parseNonNegativeInt_(profile.tm) || 0) + winner.tmReward;
    account.profile = profile;
    account.hasProfile = true;
    account.updatedAt = nowIso;
    writeAccountRow_(accountSheet, account);
  });

  tournamentSheet.appendRow([
    weekWindow.weekKey,
    weekWindow.weekStart,
    weekWindow.weekEnd,
    rawWinners[0] ? rawWinners[0].username : "",
    rawWinners[1] ? rawWinners[1].username : "",
    rawWinners[2] ? rawWinners[2].username : "",
    rawWinners[0] ? rawWinners[0].tmReward : 0,
    rawWinners[1] ? rawWinners[1].tmReward : 0,
    rawWinners[2] ? rawWinners[2].tmReward : 0,
    nowIso,
    rankedEntries.length,
  ]);

  return {
    weekKey: weekWindow.weekKey,
    weekStart: weekWindow.weekStart,
    weekEnd: weekWindow.weekEnd,
    processedAt: nowIso,
    processedNow: true,
    winners: serializeTournamentWinners_(rawWinners, accountByLower),
  };
}

function getLeaderboard_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const requestedLimit = parseNonNegativeInt_(payload.limit);
  const limit = requestedLimit === null ? 25 : Math.min(200, Math.max(1, requestedLimit));
  const weekWindow = getWeeklyTournamentWindow_();
  const ranked = buildLeaderboardEntries_(auth.accounts);
  let tournament = {
    weekKey: weekWindow.weekKey,
    weekStart: weekWindow.weekStart,
    weekEnd: weekWindow.weekEnd,
    processedAt: "",
    processedNow: false,
    winners: [],
  };
  const tournamentSheet = getTournamentSheet_();
  const tournamentCheckKey = TOURNAMENT_CHECK_CACHE_PREFIX + weekWindow.weekKey;
  const hasRecentTournamentCheck = Boolean(CacheService.getScriptCache().get(tournamentCheckKey));
  if (!hasRecentTournamentCheck) {
    const lock = LockService.getScriptLock();
    let lockAcquired = false;
    try {
      lock.waitLock(20000);
      lockAcquired = true;
      tournament = applyWeeklyTournamentPayouts_(auth.sheet, auth.accounts, ranked);
      CacheService.getScriptCache().put(tournamentCheckKey, "1", TOURNAMENT_CHECK_CACHE_TTL_SECONDS);
    } catch (_error) {
      tournament = getTournamentSnapshot_(tournamentSheet, weekWindow, auth.accounts);
    } finally {
      if (lockAcquired) lock.releaseLock();
    }
  } else {
    tournament = getTournamentSnapshot_(tournamentSheet, weekWindow, auth.accounts);
  }

  const youRaw = ranked.find((entry) => entry.usernameLower === auth.account.usernameLower) || null;

  return jsonResponse_({
    success: true,
    leaderboard: ranked.slice(0, limit).map((entry) => toLeaderboardPayloadEntry_(entry)),
    you: toLeaderboardPayloadEntry_(youRaw),
    totalPlayers: ranked.length,
    limit: limit,
    sortedBy: "xp_desc",
    tournament: {
      weekKey: tournament.weekKey,
      weekStart: tournament.weekStart,
      weekEnd: tournament.weekEnd,
      processedAt: tournament.processedAt,
      processedNow: Boolean(tournament.processedNow),
      winners: tournament.winners,
      prizes: {
        first: WEEKLY_TOURNAMENT_PRIZES[0],
        second: WEEKLY_TOURNAMENT_PRIZES[1],
        third: WEEKLY_TOURNAMENT_PRIZES[2],
      },
    },
  });
}

function sendDirectMessage_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);
  const sent = sendDirectMessageCore_(auth, payload.toUsername, payload.body);
  if (!sent.success) return jsonResponse_(sent);
  return jsonResponse_({ success: true, message: sent.message });
}

function getDirectMessages_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const currentUsernameLower = auth.account.usernameLower;
  const withUsername = normalizeUsername_(payload.withUsername || payload.toUsername || payload.username);
  const requestedLimit = parseNonNegativeInt_(payload.limit);
  const limit = requestedLimit === null ? 150 : Math.min(500, Math.max(1, requestedLimit));

  const users = auth.accounts
    .filter((entry) => !entry.disabled && entry.usernameLower !== currentUsernameLower)
    .map((entry) => ({
      username: entry.username,
      displayName: entry.displayName || entry.username,
      role: entry.role,
      admin: entry.role === "admin",
    }))
    .sort((a, b) => a.username.localeCompare(b.username));

  const userByLower = {};
  users.forEach((entry) => {
    userByLower[entry.username.toLowerCase()] = entry;
  });
  userByLower[currentUsernameLower] = {
    username: auth.account.username,
    displayName: auth.account.displayName || auth.account.username,
    role: auth.account.role,
    admin: auth.account.role === "admin",
  };

  const dmSheet = getDmSheet_();
  const filtered = withUsername
    ? readRecentDmMessagesForPair_(dmSheet, currentUsernameLower, withUsername, limit)
    : readRecentDmMessagesForUser_(dmSheet, currentUsernameLower, limit);

  const messages = filtered.map((entry) => {
    const fromUser = userByLower[entry.fromLower];
    const toUser = userByLower[entry.toLower];
    const incoming = entry.toLower === currentUsernameLower;
    return {
      id: entry.id,
      fromUsername: fromUser ? fromUser.username : entry.fromUsername,
      fromDisplayName: fromUser ? fromUser.displayName : entry.fromUsername,
      toUsername: toUser ? toUser.username : entry.toUsername,
      toDisplayName: toUser ? toUser.displayName : entry.toUsername,
      body: entry.body,
      createdAt: entry.createdAt,
      direction: incoming ? "incoming" : "outgoing",
      incoming: incoming,
    };
  });

  return jsonResponse_({
    success: true,
    messages: messages,
    users: users,
    withUsername: withUsername || "",
    totalMessages: messages.length,
  });
}

function createGroupChat_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const groupName = sanitizeGroupName_(payload.name || payload.groupName);
  if (!groupName || groupName.length < 2) {
    return jsonResponse_({ success: false, message: "Group name must be at least 2 characters." });
  }

  const providedParticipants = Array.isArray(payload.participants) ? payload.participants : [];
  const uniqueUsers = {};
  uniqueUsers[auth.account.usernameLower] = auth.account.username;
  providedParticipants.forEach((entry) => {
    const normalized = normalizeUsername_(entry);
    if (!normalized) return;
    uniqueUsers[normalized] = normalized;
  });
  const participantLower = Object.keys(uniqueUsers);
  if (participantLower.length < 3) {
    return jsonResponse_({ success: false, message: "Select at least 2 other players for a group chat." });
  }

  const participantAccounts = participantLower.map((usernameLower) =>
    auth.accounts.find((entry) => entry.usernameLower === usernameLower && !entry.disabled)
  );
  if (participantAccounts.some((entry) => !entry)) {
    return jsonResponse_({ success: false, message: "One or more selected players were not found." });
  }

  const participants = participantAccounts.map((entry) => entry.username);
  const nowIso = new Date().toISOString();
  const groupId = createGroupId_();
  getGroupSheet_().appendRow([
    groupId,
    groupName,
    auth.account.username,
    JSON.stringify(participants),
    nowIso,
    nowIso,
    "0",
  ]);

  return jsonResponse_({
    success: true,
    group: {
      id: groupId,
      name: groupName,
      createdBy: auth.account.username,
      participants: participants,
      participantCount: participants.length,
      createdAt: nowIso,
    },
  });
}

function getChatInbox_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const currentUsernameLower = auth.account.usernameLower;
  const users = auth.accounts
    .filter((entry) => !entry.disabled && entry.usernameLower !== currentUsernameLower)
    .map((entry) => ({
      username: entry.username,
      displayName: entry.displayName || entry.username,
      role: entry.role,
      admin: entry.role === "admin",
    }))
    .sort((a, b) => a.username.localeCompare(b.username));

  const groups = readGroupChats_(getGroupSheet_())
    .filter((group) => !group.disabled && group.participantsLower.indexOf(currentUsernameLower) >= 0)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((group) => ({
      id: group.id,
      name: group.name,
      createdBy: group.createdBy,
      participants: group.participants,
      participantCount: group.participants.length,
      createdAt: group.createdAt,
      updatedAt: group.updatedAt,
    }));

  return jsonResponse_({
    success: true,
    users: users,
    groups: groups,
  });
}

function getChatThread_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const threadType = String(payload.threadType || "direct").trim().toLowerCase() === "group" ? "group" : "direct";
  const requestedLimit = parseNonNegativeInt_(payload.limit);
  const limit = requestedLimit === null ? 300 : Math.min(500, Math.max(1, requestedLimit));

  const accountByLower = {};
  auth.accounts.forEach((entry) => {
    if (entry.disabled) return;
    accountByLower[entry.usernameLower] = entry;
  });

  if (threadType === "group") {
    const groupId = sanitizeGroupId_(payload.groupId);
    if (!groupId) return jsonResponse_({ success: false, message: "Group id is required." });
    const group = readGroupChats_(getGroupSheet_()).find((entry) => entry.id === groupId && !entry.disabled);
    if (!group) return jsonResponse_({ success: false, message: "Group not found." });
    if (group.participantsLower.indexOf(auth.account.usernameLower) < 0) {
      return jsonResponse_({ success: false, message: "You are not in this group chat." });
    }

    const messages = readRecentGroupMessagesById_(getGroupMessageSheet_(), groupId, limit);

    const serialized = messages.map((entry) => {
      const from = accountByLower[entry.fromLower];
      const incoming = entry.fromLower !== auth.account.usernameLower;
      return {
        id: entry.id,
        fromUsername: from ? from.username : entry.fromUsername,
        fromDisplayName: from ? from.displayName || from.username : entry.fromUsername,
        toUsername: "",
        toDisplayName: "",
        body: entry.body,
        createdAt: entry.createdAt,
        incoming: incoming,
        direction: incoming ? "incoming" : "outgoing",
        threadType: "group",
        groupId: groupId,
      };
    });

    return jsonResponse_({
      success: true,
      threadType: "group",
      threadId: groupId,
      threadLabel: group.name,
      participants: group.participants,
      messages: serialized,
      totalMessages: serialized.length,
    });
  }

  const targetUsernameLower = normalizeUsername_(payload.targetUsername || payload.toUsername || payload.withUsername);
  if (!targetUsernameLower) return jsonResponse_({ success: false, message: "Recipient username is required." });
  if (targetUsernameLower === auth.account.usernameLower) {
    return jsonResponse_({ success: false, message: "Pick another user for direct chat." });
  }
  const targetAccount = accountByLower[targetUsernameLower];
  if (!targetAccount) return jsonResponse_({ success: false, message: "Recipient account not found." });

  const messages = readRecentDmMessagesForPair_(getDmSheet_(), auth.account.usernameLower, targetUsernameLower, limit);
  const serialized = messages.map((entry) => {
    const from = accountByLower[entry.fromLower];
    const to = accountByLower[entry.toLower];
    const incoming = entry.toLower === auth.account.usernameLower;
    return {
      id: entry.id,
      fromUsername: from ? from.username : entry.fromUsername,
      fromDisplayName: from ? from.displayName || from.username : entry.fromUsername,
      toUsername: to ? to.username : entry.toUsername,
      toDisplayName: to ? to.displayName || to.username : entry.toUsername,
      body: entry.body,
      createdAt: entry.createdAt,
      incoming: incoming,
      direction: incoming ? "incoming" : "outgoing",
      threadType: "direct",
      targetUsername: targetAccount.username,
    };
  });

  return jsonResponse_({
    success: true,
    threadType: "direct",
    threadId: targetAccount.username,
    threadLabel: targetAccount.displayName || targetAccount.username,
    messages: serialized,
    totalMessages: serialized.length,
  });
}

function sendChatMessage_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const threadType = String(payload.threadType || "direct").trim().toLowerCase() === "group" ? "group" : "direct";
  if (threadType === "group") {
    const groupId = sanitizeGroupId_(payload.groupId);
    if (!groupId) return jsonResponse_({ success: false, message: "Group id is required." });
    const group = readGroupChats_(getGroupSheet_()).find((entry) => entry.id === groupId && !entry.disabled);
    if (!group) return jsonResponse_({ success: false, message: "Group not found." });
    if (group.participantsLower.indexOf(auth.account.usernameLower) < 0) {
      return jsonResponse_({ success: false, message: "You are not in this group chat." });
    }
    const body = sanitizeDmBody_(payload.body);
    if (!body) return jsonResponse_({ success: false, message: "Message cannot be empty." });
    const nowIso = new Date().toISOString();
    const messageId = createMessageId_("gm");
    getGroupMessageSheet_().appendRow([messageId, groupId, auth.account.username, body, nowIso]);
    return jsonResponse_({
      success: true,
      message: {
        id: messageId,
        groupId: groupId,
        fromUsername: auth.account.username,
        body: body,
        createdAt: nowIso,
      },
    });
  }

  const sent = sendDirectMessageCore_(auth, payload.toUsername || payload.targetUsername, payload.body);
  if (!sent.success) return jsonResponse_(sent);
  return jsonResponse_({ success: true, message: sent.message });
}

function getFriendsDashboard_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const nowMs = Date.now();
  const selfLower = auth.account.usernameLower;
  const friendRows = readFriendsCached_(getFriendSheet_()).filter((entry) => !entry.disabled);
  const accountByLower = {};
  auth.accounts.forEach((entry) => {
    if (!entry || entry.disabled) return;
    accountByLower[entry.usernameLower] = entry;
  });

  const serializeAccount = (entry) => {
    const profile = normalizeProfile_(entry.profile);
    const expiryMs = Number(entry.sessionExpiresAt || 0);
    const online = Boolean(entry.sessionToken && Number.isFinite(expiryMs) && expiryMs > nowMs);
    return {
      username: entry.username,
      displayName: entry.displayName || entry.username,
      xp: profile.xp,
      tm: profile.tm,
      streak: profile.streak,
      rank: profile.rank,
      online: online,
    };
  };

  const friends = [];
  const incoming = [];
  const outgoing = [];
  const linkedByLower = {};

  friendRows.forEach((entry) => {
    if (entry.userALower !== selfLower && entry.userBLower !== selfLower) return;
    const otherLower = entry.userALower === selfLower ? entry.userBLower : entry.userALower;
    if (!otherLower || otherLower === selfLower) return;
    linkedByLower[otherLower] = entry.status;
    const otherAccount = accountByLower[otherLower];
    if (!otherAccount) return;

    const base = serializeAccount(otherAccount);
    const payloadRow = {
      requestId: entry.id,
      status: entry.status,
      requestedBy: entry.requesterLower,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
      ...base,
    };

    if (entry.status === "accepted") {
      friends.push(payloadRow);
      return;
    }
    if (entry.status === "pending") {
      if (entry.requesterLower === selfLower) outgoing.push(payloadRow);
      else incoming.push(payloadRow);
    }
  });

  const suggestions = auth.accounts
    .filter((entry) => {
      if (!entry || entry.disabled) return false;
      if (entry.usernameLower === selfLower) return false;
      const relation = linkedByLower[entry.usernameLower];
      return relation !== "accepted" && relation !== "pending";
    })
    .map((entry) => serializeAccount(entry))
    .sort((a, b) => {
      if (a.online !== b.online) return a.online ? -1 : 1;
      if (b.xp !== a.xp) return b.xp - a.xp;
      return a.username.localeCompare(b.username);
    });

  const sortByRecent = (a, b) => Date.parse(String(b.updatedAt || b.createdAt || "")) - Date.parse(String(a.updatedAt || a.createdAt || ""));
  incoming.sort(sortByRecent);
  outgoing.sort(sortByRecent);
  friends.sort((a, b) => {
    if (a.online !== b.online) return a.online ? -1 : 1;
    if (b.xp !== a.xp) return b.xp - a.xp;
    return a.username.localeCompare(b.username);
  });

  const you = serializeAccount(auth.account);
  you.online = true;

  return jsonResponse_({
    success: true,
    you: you,
    friends: friends,
    incomingRequests: incoming,
    outgoingRequests: outgoing,
    suggestions: suggestions,
  });
}

function sendFriendRequest_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const selfLower = auth.account.usernameLower;
  const targetUsername = normalizeUsername_(payload.targetUsername || payload.username);
  if (!targetUsername) return jsonResponse_({ success: false, message: "Invalid target username." });
  if (targetUsername === selfLower) return jsonResponse_({ success: false, message: "You cannot add yourself." });

  const target = auth.accounts.find((entry) => entry.usernameLower === targetUsername && !entry.disabled);
  if (!target) return jsonResponse_({ success: false, message: "Player account not found." });

  const sheet = getFriendSheet_();
  const rows = readFriendsCached_(sheet, { forceFresh: true });
  const pairKey = buildFriendPairKey_(selfLower, targetUsername);
  const existing = rows.find((entry) => !entry.disabled && entry.pairKey === pairKey);
  const nowIso = new Date().toISOString();

  if (existing) {
    if (existing.status === "accepted") {
      return jsonResponse_({ success: false, message: "You are already friends." });
    }
    if (existing.status === "pending") {
      if (existing.requesterLower === selfLower) {
        return jsonResponse_({ success: false, message: "Friend request already sent." });
      }
      sheet.getRange(existing.rowNumber, 5, 1, 3).setValues([["accepted", nowIso, selfLower]]);
      clearFriendsCache_();
      return jsonResponse_({ success: true, message: `${target.username} accepted and is now your friend.` });
    }

    sheet.getRange(existing.rowNumber, 1, 1, FRIEND_HEADERS.length).setValues([
      [
        existing.id,
        existing.userA,
        existing.userB,
        selfLower,
        "pending",
        existing.createdAt || nowIso,
        nowIso,
        selfLower,
        "0",
      ],
    ]);
    clearFriendsCache_();
    return jsonResponse_({ success: true, message: "Friend request sent." });
  }

  const users = [selfLower, targetUsername].sort();
  const id = createMessageId_("frd");
  sheet.appendRow([id, users[0], users[1], selfLower, "pending", nowIso, nowIso, selfLower, "0"]);
  clearFriendsCache_();
  return jsonResponse_({ success: true, message: "Friend request sent." });
}

function respondFriendRequest_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const requestId = sanitizeFriendId_(payload.requestId || payload.id);
  if (!requestId) return jsonResponse_({ success: false, message: "Invalid request id." });
  const decision = String(payload.decision || payload.action || "")
    .trim()
    .toLowerCase();
  if (decision !== "accept" && decision !== "reject") {
    return jsonResponse_({ success: false, message: "Decision must be accept or reject." });
  }

  const selfLower = auth.account.usernameLower;
  const sheet = getFriendSheet_();
  const rows = readFriendsCached_(sheet, { forceFresh: true });
  const request = rows.find((entry) => !entry.disabled && entry.id === requestId);
  if (!request) return jsonResponse_({ success: false, message: "Friend request not found." });
  if (request.status !== "pending") return jsonResponse_({ success: false, message: "Friend request is no longer pending." });
  if (request.requesterLower === selfLower) {
    return jsonResponse_({ success: false, message: "Use remove to cancel your outgoing request." });
  }
  if (request.userALower !== selfLower && request.userBLower !== selfLower) {
    return jsonResponse_({ success: false, message: "This request is not for your account." });
  }

  const nextStatus = decision === "accept" ? "accepted" : "rejected";
  const nowIso = new Date().toISOString();
  sheet.getRange(request.rowNumber, 5, 1, 3).setValues([[nextStatus, nowIso, selfLower]]);
  clearFriendsCache_();
  return jsonResponse_({
    success: true,
    message: nextStatus === "accepted" ? "Friend request accepted." : "Friend request declined.",
  });
}

function removeFriend_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const selfLower = auth.account.usernameLower;
  const targetUsername = normalizeUsername_(payload.targetUsername || payload.username);
  if (!targetUsername) return jsonResponse_({ success: false, message: "Invalid target username." });
  if (targetUsername === selfLower) return jsonResponse_({ success: false, message: "Invalid target username." });

  const pairKey = buildFriendPairKey_(selfLower, targetUsername);
  if (!pairKey) return jsonResponse_({ success: false, message: "Invalid friend pair." });

  const sheet = getFriendSheet_();
  const rows = readFriendsCached_(sheet, { forceFresh: true });
  const connection = rows.find((entry) => !entry.disabled && entry.pairKey === pairKey);
  if (!connection) return jsonResponse_({ success: false, message: "No active friend connection found." });
  if (connection.userALower !== selfLower && connection.userBLower !== selfLower) {
    return jsonResponse_({ success: false, message: "This connection is not for your account." });
  }

  const nowIso = new Date().toISOString();
  sheet.getRange(connection.rowNumber, 7, 1, 3).setValues([[nowIso, selfLower, "1"]]);
  clearFriendsCache_();
  const message = connection.status === "accepted" ? "Friend removed." : "Friend request canceled.";
  return jsonResponse_({ success: true, message: message });
}

function sendTmTransfer_(payload) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (_error) {
    return jsonResponse_({ success: false, message: "Another transfer is in progress. Try again." });
  }

  try {
    const auth = requireSession_(payload, false);
    if (!auth.success) return jsonResponse_(auth);

    const senderLower = auth.account.usernameLower;
    const targetLower = normalizeUsername_(payload.targetUsername || payload.username || payload.toUsername);
    if (!targetLower) return jsonResponse_({ success: false, message: "Enter a valid recipient username." });
    if (targetLower === senderLower) return jsonResponse_({ success: false, message: "You cannot send TM$ to yourself." });

    const target = auth.accounts.find((entry) => entry.usernameLower === targetLower && !entry.disabled);
    if (!target) return jsonResponse_({ success: false, message: "Recipient account not found." });

    if (!areUsersFriends_(senderLower, targetLower)) {
      return jsonResponse_({ success: false, message: "You can only send TM$ to accepted friends." });
    }

    const amountRaw = parseNonNegativeInt_(payload.amount !== undefined ? payload.amount : payload.tm);
    if (amountRaw === null || amountRaw <= 0) {
      return jsonResponse_({ success: false, message: "Enter a valid amount greater than 0." });
    }
    const amount = Math.min(1000000000, amountRaw);

    const senderProfile = normalizeProfile_(auth.account.profile);
    if (senderProfile.tm < amount) {
      return jsonResponse_({ success: false, message: "Not enough TM Dollars." });
    }

    const targetProfile = normalizeProfile_(target.profile);
    senderProfile.tm = Math.max(0, senderProfile.tm - amount);
    targetProfile.tm = Math.max(0, targetProfile.tm + amount);

    const note = sanitizeTransferNote_(payload.note || payload.message || payload.memo || "");
    const nowIso = new Date().toISOString();
    const transferId = createMessageId_("tmx");

    auth.account.profile = senderProfile;
    auth.account.hasProfile = true;
    auth.account.updatedAt = nowIso;
    writeAccountRow_(auth.sheet, auth.account);

    target.profile = targetProfile;
    target.hasProfile = true;
    target.updatedAt = nowIso;
    writeAccountRow_(auth.sheet, target);

    getTransferSheet_().appendRow([
      transferId,
      auth.account.username,
      target.username,
      String(amount),
      note,
      nowIso,
      "0",
    ]);

    return jsonResponse_({
      success: true,
      message: "Transfer sent.",
      transfer: {
        id: transferId,
        fromUsername: auth.account.username,
        toUsername: target.username,
        amount: amount,
        note: note,
        createdAt: nowIso,
      },
      profileSender: auth.account.profile,
      balanceTm: auth.account.profile.tm,
      target: {
        username: target.username,
        displayName: target.displayName || target.username,
      },
    });
  } finally {
    lock.releaseLock();
  }
}

function getTmTransfers_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const selfLower = auth.account.usernameLower;
  const requestedLimit = parseNonNegativeInt_(payload.limit);
  const limit = requestedLimit === null ? 40 : Math.min(120, Math.max(1, requestedLimit));
  const nowMs = Date.now();

  const accountByLower = {};
  auth.accounts.forEach((entry) => {
    if (!entry || entry.disabled) return;
    accountByLower[entry.usernameLower] = entry;
  });

  const acceptedFriends = readFriendsCached_(getFriendSheet_())
    .filter(
      (entry) =>
        !entry.disabled &&
        entry.status === "accepted" &&
        (entry.userALower === selfLower || entry.userBLower === selfLower),
    )
    .map((entry) => {
      const otherLower = entry.userALower === selfLower ? entry.userBLower : entry.userALower;
      const account = accountByLower[otherLower];
      if (!account) return null;
      const expiryMs = Number(account.sessionExpiresAt || 0);
      const online = Boolean(account.sessionToken && Number.isFinite(expiryMs) && expiryMs > nowMs);
      return {
        username: account.username,
        displayName: account.displayName || account.username,
        online: online,
      };
    })
    .filter((entry) => !!entry)
    .sort((a, b) => {
      if (a.online !== b.online) return a.online ? -1 : 1;
      return a.username.localeCompare(b.username);
    });

  const transfers = readRecentTransfersForUser_(getTransferSheet_(), selfLower, limit);

  const history = transfers.map((entry) => {
    const incoming = entry.toLower === selfLower;
    const partnerLower = incoming ? entry.fromLower : entry.toLower;
    const partner = accountByLower[partnerLower];
    return {
      id: entry.id,
      fromUsername: entry.fromUsername,
      toUsername: entry.toUsername,
      amount: entry.amount,
      note: entry.note,
      createdAt: entry.createdAt,
      incoming: incoming,
      direction: incoming ? "incoming" : "outgoing",
      partnerUsername: partner ? partner.username : incoming ? entry.fromUsername : entry.toUsername,
      partnerDisplayName: partner ? partner.displayName || partner.username : incoming ? entry.fromUsername : entry.toUsername,
    };
  });

  const profile = normalizeProfile_(auth.account.profile);
  return jsonResponse_({
    success: true,
    profile: profile,
    balanceTm: profile.tm,
    friends: acceptedFriends,
    transfers: history,
    totalTransfers: history.length,
  });
}

function sendShopGift_(payload) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (_error) {
    return jsonResponse_({ success: false, message: "Another gift is being processed. Try again." });
  }

  try {
    const auth = requireSession_(payload, false);
    if (!auth.success) return jsonResponse_(auth);

    const senderLower = auth.account.usernameLower;
    const targetLower = normalizeUsername_(payload.targetUsername || payload.username || payload.toUsername);
    if (!targetLower) return jsonResponse_({ success: false, message: "Enter a valid friend username." });
    if (targetLower === senderLower) return jsonResponse_({ success: false, message: "You cannot gift yourself." });

    const target = auth.accounts.find((entry) => entry.usernameLower === targetLower && !entry.disabled);
    if (!target) return jsonResponse_({ success: false, message: "Recipient account not found." });

    if (!areUsersFriends_(senderLower, targetLower)) {
      return jsonResponse_({ success: false, message: "You can only gift shop items to accepted friends." });
    }

    const itemId = sanitizeShopItemId_(payload.itemId || payload.shopItemId || payload.id);
    if (!itemId) return jsonResponse_({ success: false, message: "Invalid shop item." });
    const itemName = sanitizeShopItemName_(payload.itemName || payload.name || itemId);
    const itemType = sanitizeShopItemType_(payload.itemType || payload.type || "item");

    const priceRaw = parseNonNegativeInt_(payload.priceTm !== undefined ? payload.priceTm : payload.price);
    if (priceRaw === null || priceRaw <= 0) {
      return jsonResponse_({ success: false, message: "Invalid gift price." });
    }
    const priceTm = Math.min(1000000000, priceRaw);

    const senderProfile = normalizeProfile_(auth.account.profile);
    if (senderProfile.tm < priceTm) {
      return jsonResponse_({ success: false, message: "Not enough TM Dollars to send this gift." });
    }

    const shopGiftSheet = getShopGiftSheet_();
    const existingGift = readShopGifts_(shopGiftSheet).find(
      (entry) => !entry.disabled && entry.toLower === targetLower && entry.itemId === itemId,
    );
    if (existingGift) {
      return jsonResponse_({ success: false, message: `${target.username} already has this gifted item.` });
    }

    senderProfile.tm = Math.max(0, senderProfile.tm - priceTm);
    const nowIso = new Date().toISOString();
    const giftId = createMessageId_("shg");

    auth.account.profile = senderProfile;
    auth.account.hasProfile = true;
    auth.account.updatedAt = nowIso;
    writeAccountRow_(auth.sheet, auth.account);

    shopGiftSheet.appendRow([
      giftId,
      auth.account.username,
      target.username,
      itemId,
      itemName,
      itemType,
      String(priceTm),
      nowIso,
      "0",
    ]);

    return jsonResponse_({
      success: true,
      message: "Gift sent.",
      gift: {
        id: giftId,
        fromUsername: auth.account.username,
        toUsername: target.username,
        itemId: itemId,
        itemName: itemName,
        itemType: itemType,
        priceTm: priceTm,
        createdAt: nowIso,
      },
      profileSender: auth.account.profile,
      balanceTm: auth.account.profile.tm,
      target: {
        username: target.username,
        displayName: target.displayName || target.username,
      },
    });
  } finally {
    lock.releaseLock();
  }
}

function getShopGiftState_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const selfLower = auth.account.usernameLower;
  const requestedLimit = parseNonNegativeInt_(payload.limit);
  const limit = requestedLimit === null ? 80 : Math.min(220, Math.max(1, requestedLimit));
  const nowMs = Date.now();

  const accountByLower = {};
  auth.accounts.forEach((entry) => {
    if (!entry || entry.disabled) return;
    accountByLower[entry.usernameLower] = entry;
  });

  const acceptedFriends = readFriendsCached_(getFriendSheet_())
    .filter(
      (entry) =>
        !entry.disabled &&
        entry.status === "accepted" &&
        (entry.userALower === selfLower || entry.userBLower === selfLower),
    )
    .map((entry) => {
      const otherLower = entry.userALower === selfLower ? entry.userBLower : entry.userALower;
      const account = accountByLower[otherLower];
      if (!account) return null;
      const expiryMs = Number(account.sessionExpiresAt || 0);
      const online = Boolean(account.sessionToken && Number.isFinite(expiryMs) && expiryMs > nowMs);
      return {
        username: account.username,
        displayName: account.displayName || account.username,
        online: online,
      };
    })
    .filter((entry) => !!entry)
    .sort((a, b) => {
      if (a.online !== b.online) return a.online ? -1 : 1;
      return a.username.localeCompare(b.username);
    });

  const gifts = readShopGifts_(getShopGiftSheet_())
    .filter((entry) => !entry.disabled && entry.toLower === selfLower)
    .sort((a, b) => {
      const aMs = Number.isFinite(a.createdAtMs) ? a.createdAtMs : 0;
      const bMs = Number.isFinite(b.createdAtMs) ? b.createdAtMs : 0;
      if (aMs !== bMs) return bMs - aMs;
      return b.rowNumber - a.rowNumber;
    });

  const giftLookup = {};
  gifts.forEach((entry) => {
    if (!entry.itemId) return;
    giftLookup[entry.itemId] = true;
  });
  const ownedItemIds = Object.keys(giftLookup).sort();

  const limited = gifts.length > limit ? gifts.slice(0, limit) : gifts;
  const history = limited.map((entry) => {
    const sender = accountByLower[entry.fromLower];
    return {
      id: entry.id,
      fromUsername: sender ? sender.username : entry.fromUsername,
      fromDisplayName: sender ? sender.displayName || sender.username : entry.fromUsername,
      itemId: entry.itemId,
      itemName: entry.itemName,
      itemType: entry.itemType,
      priceTm: entry.priceTm,
      createdAt: entry.createdAt,
    };
  });

  const profile = normalizeProfile_(auth.account.profile);
  return jsonResponse_({
    success: true,
    profile: profile,
    balanceTm: profile.tm,
    friends: acceptedFriends,
    ownedItemIds: ownedItemIds,
    gifts: history,
    totalGifts: gifts.length,
  });
}

function submitFeedback_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);
  if (auth.account.role === "admin") {
    return jsonResponse_({
      success: false,
      message: "Admin accounts view feedback instead of submitting forms.",
    });
  }

  const name = sanitizeFeedbackName_(payload.name || payload.displayName || auth.account.displayName || auth.account.username);
  const email = sanitizeFeedbackEmail_(payload.email);
  const phone = sanitizeFeedbackPhone_(payload.phone);
  const rating = sanitizeFeedbackRating_(payload.rating);
  const feedbackText = sanitizeFeedbackText_(payload.feedback || payload.message || payload.body);

  if (!name || name.length < 2) {
    return jsonResponse_({ success: false, message: "Enter your name (at least 2 characters)." });
  }
  if (!email) {
    return jsonResponse_({ success: false, message: "Enter a valid email address." });
  }
  if (!rating) {
    return jsonResponse_({ success: false, message: "Select a rating from 1 to 5 stars." });
  }
  if (!feedbackText || feedbackText.length < 5) {
    return jsonResponse_({ success: false, message: "Feedback must be at least 5 characters." });
  }

  const nowIso = new Date().toISOString();
  const id = createMessageId_("fbk");
  getFeedbackSheet_().appendRow([
    id,
    auth.account.username,
    auth.account.displayName || auth.account.username,
    name,
    email,
    phone,
    String(rating),
    feedbackText,
    "new",
    "",
    nowIso,
    nowIso,
    auth.account.username,
    "0",
  ]);

  return jsonResponse_({
    success: true,
    message: "Feedback sent. Thank you!",
    entry: {
      id: id,
      username: auth.account.username,
      displayName: auth.account.displayName || auth.account.username,
      name: name,
      email: email,
      phone: phone,
      rating: rating,
      feedback: feedbackText,
      status: "new",
      adminNote: "",
      createdAt: nowIso,
      updatedAt: nowIso,
    },
  });
}

function getFeedbackDashboard_(payload) {
  const auth = requireSession_(payload, false);
  if (!auth.success) return jsonResponse_(auth);

  const isAdmin = auth.account.role === "admin";
  const requestedLimit = parseNonNegativeInt_(payload.limit);
  const defaultLimit = isAdmin ? 240 : 60;
  const maxLimit = isAdmin ? 500 : 140;
  const limit = requestedLimit === null ? defaultLimit : Math.min(maxLimit, Math.max(1, requestedLimit));

  const selfLower = auth.account.usernameLower;
  let entries = readFeedback_(getFeedbackSheet_()).filter((entry) => !entry.disabled);
  if (!isAdmin) {
    entries = entries.filter((entry) => entry.usernameLower === selfLower);
  }
  entries.sort((a, b) => {
    const aMs = Number.isFinite(a.createdAtMs) ? a.createdAtMs : 0;
    const bMs = Number.isFinite(b.createdAtMs) ? b.createdAtMs : 0;
    if (aMs !== bMs) return bMs - aMs;
    return b.rowNumber - a.rowNumber;
  });

  const totalEntries = entries.length;
  const visible = entries.length > limit ? entries.slice(0, limit) : entries;
  const serialized = visible.map((entry) => ({
    id: entry.id,
    username: entry.username,
    displayName: entry.displayName || entry.username,
    name: entry.name,
    email: entry.email,
    phone: entry.phone,
    rating: entry.rating,
    feedback: entry.feedback,
    status: entry.status,
    adminNote: entry.adminNote,
    createdAt: entry.createdAt,
    updatedAt: entry.updatedAt,
    updatedBy: entry.updatedBy,
    mine: entry.usernameLower === selfLower,
  }));

  return jsonResponse_({
    success: true,
    admin: isAdmin,
    entries: serialized,
    totalEntries: totalEntries,
    visibleCount: serialized.length,
  });
}

function adminUpdateFeedback_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const feedbackId = sanitizeFeedbackId_(payload.feedbackId || payload.id);
  if (!feedbackId) return jsonResponse_({ success: false, message: "Invalid feedback id." });
  const status = sanitizeFeedbackStatus_(payload.status);
  const adminNote = sanitizeFeedbackAdminNote_(payload.adminNote || payload.note);
  const sheet = getFeedbackSheet_();
  const entries = readFeedback_(sheet);
  const target = entries.find((entry) => !entry.disabled && entry.id === feedbackId);
  if (!target) return jsonResponse_({ success: false, message: "Feedback entry not found." });

  const nowIso = new Date().toISOString();
  const shouldDisable = status === "resolved";
  sheet.getRange(target.rowNumber, 9, 1, 5).setValues([
    [status, adminNote, nowIso, auth.account.username, shouldDisable ? "1" : "0"],
  ]);

  return jsonResponse_({
    success: true,
    message: shouldDisable ? "Feedback resolved and archived." : "Feedback updated.",
    entry: {
      id: target.id,
      status: status,
      adminNote: adminNote,
      disabled: shouldDisable,
      updatedAt: nowIso,
      updatedBy: auth.account.username,
    },
  });
}

function adminDeleteFeedback_(payload) {
  const auth = requireSession_(payload, true);
  if (!auth.success) return jsonResponse_(auth);

  const feedbackId = sanitizeFeedbackId_(payload.feedbackId || payload.id);
  if (!feedbackId) return jsonResponse_({ success: false, message: "Invalid feedback id." });

  const sheet = getFeedbackSheet_();
  const entries = readFeedback_(sheet);
  const target = entries.find((entry) => !entry.disabled && entry.id === feedbackId);
  if (!target) return jsonResponse_({ success: false, message: "Feedback entry not found." });

  const nowIso = new Date().toISOString();
  const status = "resolved";
  const adminNote = target.adminNote || "";
  sheet.getRange(target.rowNumber, 9, 1, 5).setValues([[status, adminNote, nowIso, auth.account.username, "1"]]);

  return jsonResponse_({
    success: true,
    message: "Feedback deleted from inbox.",
    entry: {
      id: target.id,
      status: status,
      adminNote: adminNote,
      disabled: true,
      updatedAt: nowIso,
      updatedBy: auth.account.username,
    },
  });
}

function requireSession_(payload, requireAdmin, options) {
  const allowLocked = Boolean(options && options.allowLocked);
  const sessionToken = String(payload.sessionToken || "").trim();
  if (!sessionToken) return { success: false, message: "Missing session token." };

  const sheet = getAccountSheet_();
  const accounts = readAccountsCached_(sheet);
  const account = accounts.find((entry) => safeEquals_(entry.sessionToken, sessionToken));
  if (!account || account.disabled) return { success: false, message: "Invalid session." };

  const nowMs = Date.now();
  const expiryMs = Number(account.sessionExpiresAt || 0);
  if (!Number.isFinite(expiryMs) || expiryMs <= nowMs) {
    // Keep users signed in until they explicitly log out.
    account.sessionExpiresAt = String(nowMs + SESSION_TTL_MS);
    account.updatedAt = new Date(nowMs).toISOString();
    writeAccountRow_(sheet, account);
  }

  const activeLock = getActiveAccountLock_(account, nowMs);
  if (!activeLock.locked && parseLockUntilMs_(account.lockUntilMs) > 0) {
    clearAccountLockFields_(account);
    account.updatedAt = new Date(nowMs).toISOString();
    writeAccountRow_(sheet, account);
  } else if (activeLock.locked && account.role !== "admin" && !allowLocked) {
    return {
      success: false,
      message: activeLock.message || "This account is locked by an admin.",
      code: "ACCOUNT_LOCKED",
      lockUntilMs: activeLock.untilMs,
      lockUntilAdminUnlock: activeLock.untilAdminUnlock,
      lockMessage: activeLock.message || "",
    };
  }

  if (requireAdmin && account.role !== "admin") {
    return { success: false, message: "Admin access required." };
  }

  return { success: true, sheet: sheet, accounts: accounts, account: account, lockState: activeLock };
}

let spreadsheetSingleton_ = null;

function getSpreadsheet_() {
  if (!spreadsheetSingleton_) {
    spreadsheetSingleton_ = SpreadsheetApp.openById(SHEET_ID);
  }
  return spreadsheetSingleton_;
}

function getAccountSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  ensureAccountHeaders_(sheet);
  return sheet;
}

function getDmSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(DM_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(DM_SHEET_NAME);
  }
  ensureDmHeaders_(sheet);
  return sheet;
}

function getGroupSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(GROUP_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(GROUP_SHEET_NAME);
  }
  ensureGroupHeaders_(sheet);
  return sheet;
}

function getGroupMessageSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(GROUP_MESSAGE_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(GROUP_MESSAGE_SHEET_NAME);
  }
  ensureGroupMessageHeaders_(sheet);
  return sheet;
}

function getScreenRewardSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(SCREEN_REWARD_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SCREEN_REWARD_SHEET_NAME);
  }
  ensureScreenRewardHeaders_(sheet);
  return sheet;
}

function getFriendSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(FRIEND_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(FRIEND_SHEET_NAME);
    sheet.getRange(1, 1, 1, FRIEND_HEADERS.length).setValues([FRIEND_HEADERS]);
    return sheet;
  }
  ensureFriendHeaders_(sheet);
  return sheet;
}

function getTransferSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(TRANSFER_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(TRANSFER_SHEET_NAME);
    sheet.getRange(1, 1, 1, TRANSFER_HEADERS.length).setValues([TRANSFER_HEADERS]);
    return sheet;
  }
  ensureTransferHeaders_(sheet);
  return sheet;
}

function getShopGiftSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(SHOP_GIFT_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHOP_GIFT_SHEET_NAME);
    sheet.getRange(1, 1, 1, SHOP_GIFT_HEADERS.length).setValues([SHOP_GIFT_HEADERS]);
    return sheet;
  }
  ensureShopGiftHeaders_(sheet);
  return sheet;
}

function getTournamentSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(TOURNAMENT_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(TOURNAMENT_SHEET_NAME);
    sheet.getRange(1, 1, 1, TOURNAMENT_HEADERS.length).setValues([TOURNAMENT_HEADERS]);
    return sheet;
  }
  ensureTournamentHeaders_(sheet);
  return sheet;
}

function getXpCodeSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(XP_CODE_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(XP_CODE_SHEET_NAME);
    sheet.getRange(1, 1, 1, XP_CODE_HEADERS.length).setValues([XP_CODE_HEADERS]);
    return sheet;
  }
  ensureXpCodeHeaders_(sheet);
  return sheet;
}

function getXpCodeClaimSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(XP_CODE_CLAIM_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(XP_CODE_CLAIM_SHEET_NAME);
    sheet.getRange(1, 1, 1, XP_CODE_CLAIM_HEADERS.length).setValues([XP_CODE_CLAIM_HEADERS]);
    return sheet;
  }
  ensureXpCodeClaimHeaders_(sheet);
  return sheet;
}

function getUiSettingsSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(UI_SETTINGS_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(UI_SETTINGS_SHEET_NAME);
    sheet.getRange(1, 1, 1, UI_SETTINGS_HEADERS.length).setValues([UI_SETTINGS_HEADERS]);
    return sheet;
  }
  ensureUiSettingsHeaders_(sheet);
  return sheet;
}

function getFeedbackSheet_() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(FEEDBACK_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(FEEDBACK_SHEET_NAME);
    sheet.getRange(1, 1, 1, FEEDBACK_HEADERS.length).setValues([FEEDBACK_HEADERS]);
    return sheet;
  }
  ensureFeedbackHeaders_(sheet);
  return sheet;
}

function ensureAccountHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, ACCOUNT_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, ACCOUNT_HEADERS.length).setValues([ACCOUNT_HEADERS]);
    return;
  }

  if (firstCell !== "username") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, ACCOUNT_HEADERS.length).setValues([ACCOUNT_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  ACCOUNT_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, ACCOUNT_HEADERS.length).setValues([ACCOUNT_HEADERS]);
  }
}

function ensureDmHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, DM_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, DM_HEADERS.length).setValues([DM_HEADERS]);
    return;
  }

  if (firstCell !== "id") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, DM_HEADERS.length).setValues([DM_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  DM_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, DM_HEADERS.length).setValues([DM_HEADERS]);
  }
}

function ensureGroupHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, GROUP_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, GROUP_HEADERS.length).setValues([GROUP_HEADERS]);
    return;
  }

  if (firstCell !== "id") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, GROUP_HEADERS.length).setValues([GROUP_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  GROUP_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, GROUP_HEADERS.length).setValues([GROUP_HEADERS]);
  }
}

function ensureGroupMessageHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, GROUP_MESSAGE_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, GROUP_MESSAGE_HEADERS.length).setValues([GROUP_MESSAGE_HEADERS]);
    return;
  }

  if (firstCell !== "id") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, GROUP_MESSAGE_HEADERS.length).setValues([GROUP_MESSAGE_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  GROUP_MESSAGE_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, GROUP_MESSAGE_HEADERS.length).setValues([GROUP_MESSAGE_HEADERS]);
  }
}

function ensureScreenRewardHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, SCREEN_REWARD_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, SCREEN_REWARD_HEADERS.length).setValues([SCREEN_REWARD_HEADERS]);
    return;
  }

  if (firstCell !== "id") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, SCREEN_REWARD_HEADERS.length).setValues([SCREEN_REWARD_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  SCREEN_REWARD_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, SCREEN_REWARD_HEADERS.length).setValues([SCREEN_REWARD_HEADERS]);
  }
}

function ensureFriendHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, FRIEND_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, FRIEND_HEADERS.length).setValues([FRIEND_HEADERS]);
    return;
  }

  if (firstCell !== "id") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, FRIEND_HEADERS.length).setValues([FRIEND_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  FRIEND_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, FRIEND_HEADERS.length).setValues([FRIEND_HEADERS]);
  }
}

function ensureTransferHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, TRANSFER_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, TRANSFER_HEADERS.length).setValues([TRANSFER_HEADERS]);
    return;
  }

  if (firstCell !== "id") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, TRANSFER_HEADERS.length).setValues([TRANSFER_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  TRANSFER_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, TRANSFER_HEADERS.length).setValues([TRANSFER_HEADERS]);
  }
}

function ensureShopGiftHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, SHOP_GIFT_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, SHOP_GIFT_HEADERS.length).setValues([SHOP_GIFT_HEADERS]);
    return;
  }

  if (firstCell !== "id") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, SHOP_GIFT_HEADERS.length).setValues([SHOP_GIFT_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  SHOP_GIFT_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, SHOP_GIFT_HEADERS.length).setValues([SHOP_GIFT_HEADERS]);
  }
}

function ensureTournamentHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, TOURNAMENT_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, TOURNAMENT_HEADERS.length).setValues([TOURNAMENT_HEADERS]);
    return;
  }

  if (firstCell !== "week_key") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, TOURNAMENT_HEADERS.length).setValues([TOURNAMENT_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  TOURNAMENT_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, TOURNAMENT_HEADERS.length).setValues([TOURNAMENT_HEADERS]);
  }
}

function ensureXpCodeHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, XP_CODE_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, XP_CODE_HEADERS.length).setValues([XP_CODE_HEADERS]);
    return;
  }

  if (firstCell !== "id") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, XP_CODE_HEADERS.length).setValues([XP_CODE_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  XP_CODE_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, XP_CODE_HEADERS.length).setValues([XP_CODE_HEADERS]);
  }
}

function ensureXpCodeClaimHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, XP_CODE_CLAIM_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, XP_CODE_CLAIM_HEADERS.length).setValues([XP_CODE_CLAIM_HEADERS]);
    return;
  }

  if (firstCell !== "id") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, XP_CODE_CLAIM_HEADERS.length).setValues([XP_CODE_CLAIM_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  XP_CODE_CLAIM_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, XP_CODE_CLAIM_HEADERS.length).setValues([XP_CODE_CLAIM_HEADERS]);
  }
}

function ensureUiSettingsHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, UI_SETTINGS_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, UI_SETTINGS_HEADERS.length).setValues([UI_SETTINGS_HEADERS]);
    return;
  }

  if (firstCell !== "key") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, UI_SETTINGS_HEADERS.length).setValues([UI_SETTINGS_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  UI_SETTINGS_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, UI_SETTINGS_HEADERS.length).setValues([UI_SETTINGS_HEADERS]);
  }
}

function ensureFeedbackHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, FEEDBACK_HEADERS.length).getValues()[0];
  const firstCell = String(firstRow[0] || "").trim().toLowerCase();

  if (!firstCell) {
    sheet.getRange(1, 1, 1, FEEDBACK_HEADERS.length).setValues([FEEDBACK_HEADERS]);
    return;
  }

  if (firstCell !== "id") {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, FEEDBACK_HEADERS.length).setValues([FEEDBACK_HEADERS]);
    return;
  }

  const normalized = firstRow.map((value) => String(value || "").trim().toLowerCase());
  let needsPatch = false;
  FEEDBACK_HEADERS.forEach((header, index) => {
    if (normalized[index] !== header) needsPatch = true;
  });
  if (needsPatch) {
    sheet.getRange(1, 1, 1, FEEDBACK_HEADERS.length).setValues([FEEDBACK_HEADERS]);
  }
}

function clearAccountsCache_() {
  try {
    CacheService.getScriptCache().remove(ACCOUNT_CACHE_KEY);
  } catch (_error) {}
}

function clearFriendsCache_() {
  try {
    CacheService.getScriptCache().remove(FRIEND_CACHE_KEY);
  } catch (_error) {}
}

function clearXpCodeCaches_() {
  try {
    const cache = CacheService.getScriptCache();
    cache.remove(XP_CODE_CACHE_KEY);
    cache.remove(XP_CODE_CLAIM_CACHE_KEY);
  } catch (_error) {}
}

function readAccountsCached_(sheet, options) {
  const forceFresh = Boolean(options && options.forceFresh);
  if (!forceFresh) {
    try {
      const cachedRaw = CacheService.getScriptCache().get(ACCOUNT_CACHE_KEY);
      if (cachedRaw) {
        const cached = JSON.parse(cachedRaw);
        if (Array.isArray(cached)) return cached;
      }
    } catch (_error) {}
  }

  const accounts = readAccounts_(sheet);
  try {
    CacheService.getScriptCache().put(ACCOUNT_CACHE_KEY, JSON.stringify(accounts), ACCOUNT_CACHE_TTL_SECONDS);
  } catch (_error) {}
  return accounts;
}

function readFriendsCached_(sheet, options) {
  const forceFresh = Boolean(options && options.forceFresh);
  if (!forceFresh) {
    try {
      const cachedRaw = CacheService.getScriptCache().get(FRIEND_CACHE_KEY);
      if (cachedRaw) {
        const cached = JSON.parse(cachedRaw);
        if (Array.isArray(cached)) return cached;
      }
    } catch (_error) {}
  }

  const rows = readFriends_(sheet);
  try {
    CacheService.getScriptCache().put(FRIEND_CACHE_KEY, JSON.stringify(rows), FRIEND_CACHE_TTL_SECONDS);
  } catch (_error) {}
  return rows;
}

function readXpCodesCached_(sheet, options) {
  const forceFresh = Boolean(options && options.forceFresh);
  if (!forceFresh) {
    try {
      const cachedRaw = CacheService.getScriptCache().get(XP_CODE_CACHE_KEY);
      if (cachedRaw) {
        const cached = JSON.parse(cachedRaw);
        if (Array.isArray(cached)) return cached;
      }
    } catch (_error) {}
  }

  const rows = readXpCodes_(sheet);
  try {
    CacheService.getScriptCache().put(XP_CODE_CACHE_KEY, JSON.stringify(rows), XP_CODE_CACHE_TTL_SECONDS);
  } catch (_error) {}
  return rows;
}

function readXpCodeClaimsCached_(sheet, options) {
  const forceFresh = Boolean(options && options.forceFresh);
  if (!forceFresh) {
    try {
      const cachedRaw = CacheService.getScriptCache().get(XP_CODE_CLAIM_CACHE_KEY);
      if (cachedRaw) {
        const cached = JSON.parse(cachedRaw);
        if (Array.isArray(cached)) return cached;
      }
    } catch (_error) {}
  }

  const rows = readXpCodeClaims_(sheet);
  try {
    CacheService.getScriptCache().put(XP_CODE_CLAIM_CACHE_KEY, JSON.stringify(rows), XP_CODE_CLAIM_CACHE_TTL_SECONDS);
  } catch (_error) {}
  return rows;
}

function readAccounts_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const width = Math.max(ACCOUNT_HEADERS.length, sheet.getLastColumn());
  const rows = sheet.getRange(1, 1, lastRow, width).getValues();
  const headerMap = buildHeaderMap_(rows[0]);
  const result = [];

  for (let i = 1; i < rows.length; i += 1) {
    const row = rows[i];
    const username = String(getCellByHeader_(row, headerMap, "username", 0) || "").trim();
    if (!username) continue;

    const displayFallback = String(row[1] || "").trim();
    const roleRaw = String(getCellByHeader_(row, headerMap, "role", 3) || "").trim();
    const legacyAdmin = roleRaw.toLowerCase() === "yes";
    const normalizedRole = roleRaw.toLowerCase() === "admin" || legacyAdmin ? "admin" : "user";
    const disabledRaw = String(getCellByHeader_(row, headerMap, "disabled", 8) || "").trim().toLowerCase();
    const profileRaw = String(getCellByHeader_(row, headerMap, "profile_json", 9) || "").trim();
    const profile = normalizeProfile_(parseProfileJson_(profileRaw));

    result.push({
      rowNumber: i + 1,
      username: username,
      usernameLower: username.toLowerCase(),
      displayName: String(getCellByHeader_(row, headerMap, "display_name", 1) || "").trim() || displayFallback || username,
      passwordHash: String(getCellByHeader_(row, headerMap, "password_hash", 2) || "").trim(),
      role: normalizedRole,
      createdAt: String(getCellByHeader_(row, headerMap, "created_at", 4) || "").trim(),
      updatedAt: String(getCellByHeader_(row, headerMap, "updated_at", 5) || "").trim(),
      sessionToken: String(getCellByHeader_(row, headerMap, "session_token", 6) || "").trim(),
      sessionExpiresAt: String(getCellByHeader_(row, headerMap, "session_expires_at", 7) || "").trim(),
      disabled: disabledRaw === "1" || disabledRaw === "true" || disabledRaw === "yes",
      hasProfile: Boolean(profileRaw),
      profile: profile,
      passwordPlain: String(getCellByHeader_(row, headerMap, "password_plain", 10) || "").trim(),
      lockUntilMs: String(getCellByHeader_(row, headerMap, "lock_until_ms", 11) || "").trim(),
      lockMessage: String(getCellByHeader_(row, headerMap, "lock_message", 12) || "").trim(),
      lockSetBy: String(getCellByHeader_(row, headerMap, "lock_set_by", 13) || "").trim(),
      lockSetAt: String(getCellByHeader_(row, headerMap, "lock_set_at", 14) || "").trim(),
    });
  }
  return result;
}

function parseDmMessageRow_(row, rowNumber) {
  const id = String(row[0] || "").trim();
  const fromUsername = normalizeUsername_(row[1]);
  const toUsername = normalizeUsername_(row[2]);
  const body = sanitizeDmBody_(row[3]);
  const createdAt = String(row[4] || "").trim();
  if (!id || !fromUsername || !toUsername || !body) return null;
  return {
    rowNumber: rowNumber,
    id: id,
    fromUsername: fromUsername,
    fromLower: fromUsername.toLowerCase(),
    toUsername: toUsername,
    toLower: toUsername.toLowerCase(),
    body: body,
    createdAt: createdAt,
  };
}

function parseGroupMessageRow_(row, rowNumber) {
  const id = String(row[0] || "").trim();
  const groupId = sanitizeGroupId_(row[1]);
  const fromUsername = normalizeUsername_(row[2]);
  const body = sanitizeDmBody_(row[3]);
  const createdAt = String(row[4] || "").trim();
  if (!id || !groupId || !fromUsername || !body) return null;
  return {
    rowNumber: rowNumber,
    id: id,
    groupId: groupId,
    fromUsername: fromUsername,
    fromLower: fromUsername.toLowerCase(),
    body: body,
    createdAt: createdAt,
  };
}

function parseTransferRow_(row, rowNumber) {
  const id = sanitizeTransferId_(row[0]);
  const fromUsername = normalizeUsername_(row[1]);
  const toUsername = normalizeUsername_(row[2]);
  const amountRaw = parseNonNegativeInt_(row[3]);
  const note = sanitizeTransferNote_(row[4]);
  const createdAt = String(row[5] || "").trim();
  const disabledRaw = String(row[6] || "").trim().toLowerCase();
  if (!id || !fromUsername || !toUsername || amountRaw === null || amountRaw <= 0) return null;
  return {
    rowNumber: rowNumber,
    id: id,
    fromUsername: fromUsername,
    fromLower: fromUsername.toLowerCase(),
    toUsername: toUsername,
    toLower: toUsername.toLowerCase(),
    amount: amountRaw,
    note: note,
    createdAt: createdAt,
    createdAtMs: Date.parse(createdAt || ""),
    disabled: disabledRaw === "1" || disabledRaw === "true" || disabledRaw === "yes",
  };
}

function readRecentRowsByFilter_(sheet, columnCount, parseRow, includeRow, limit, maxScanRows) {
  const safeLimit = Math.max(1, Math.floor(Number(limit) || 1));
  const scanCap = Math.max(safeLimit, Math.floor(Number(maxScanRows) || safeLimit));
  const chunkSize = Math.max(100, Math.floor(Number(RECENT_SCAN_CHUNK_ROWS) || 400));
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  const collected = [];
  let scanned = 0;
  for (let end = lastRow; end >= 2 && scanned < scanCap && collected.length < safeLimit; end -= chunkSize) {
    const start = Math.max(2, end - chunkSize + 1);
    const rowCount = end - start + 1;
    const rows = sheet.getRange(start, 1, rowCount, columnCount).getValues();
    scanned += rowCount;
    for (let i = rows.length - 1; i >= 0 && collected.length < safeLimit; i -= 1) {
      const parsed = parseRow(rows[i], start + i);
      if (!parsed) continue;
      if (!includeRow(parsed)) continue;
      collected.push(parsed);
    }
  }
  return collected;
}

function readDmMessages_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const rows = sheet.getRange(2, 1, lastRow - 1, DM_HEADERS.length).getValues();
  return rows
    .map((row, index) => parseDmMessageRow_(row, index + 2))
    .filter((entry) => !!entry);
}

function readGroupChats_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const rows = sheet.getRange(2, 1, lastRow - 1, GROUP_HEADERS.length).getValues();
  return rows
    .map((row, index) => {
      const id = sanitizeGroupId_(row[0]);
      const name = sanitizeGroupName_(row[1]);
      const createdBy = normalizeUsername_(row[2]);
      const participants = parseUsernameArray_(row[3]);
      const participantsLower = participants.map((username) => username.toLowerCase());
      const createdAt = String(row[4] || "").trim();
      const updatedAt = String(row[5] || "").trim();
      const disabledRaw = String(row[6] || "").trim().toLowerCase();
      if (!id || !name || !createdBy || participants.length < 2) return null;
      return {
        rowNumber: index + 2,
        id: id,
        name: name,
        createdBy: createdBy,
        participants: participants,
        participantsLower: participantsLower,
        createdAt: createdAt,
        updatedAt: updatedAt,
        disabled: disabledRaw === "1" || disabledRaw === "true" || disabledRaw === "yes",
      };
    })
    .filter((entry) => !!entry);
}

function readGroupMessages_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const rows = sheet.getRange(2, 1, lastRow - 1, GROUP_MESSAGE_HEADERS.length).getValues();
  return rows
    .map((row, index) => parseGroupMessageRow_(row, index + 2))
    .filter((entry) => !!entry);
}

function parseScreenRewardRow_(row, rowNumber) {
  const id = sanitizeScreenRewardId_(row[0]);
  const targetUsername = normalizeUsername_(row[1]);
  const label = sanitizeScreenRewardLabel_(row[2]);
  const message = sanitizeScreenRewardMessage_(row[3]);
  const xpRaw = parseNonNegativeInt_(row[4]);
  const tmRaw = parseNonNegativeInt_(row[5]);
  const streakRaw = parseNonNegativeInt_(row[6]);
  const rank = String(row[7] || "")
    .trim()
    .slice(0, 40);
  const createdBy = normalizeUsername_(row[8]);
  const createdAt = String(row[9] || "").trim();
  const expiresAt = String(row[10] || "").trim();
  const claimedByRaw = String(row[11] || "").trim();
  const claimedAt = String(row[12] || "").trim();
  const disabledRaw = String(row[13] || "").trim().toLowerCase();
  if (!id || !targetUsername || !label) return null;
  return {
    rowNumber: rowNumber,
    id: id,
    targetUsername: targetUsername,
    targetLower: targetUsername.toLowerCase(),
    label: label,
    message: message,
    xp: xpRaw === null ? 0 : xpRaw,
    tm: tmRaw === null ? 0 : tmRaw,
    streak: streakRaw === null ? 0 : streakRaw,
    rank: rank,
    createdBy: createdBy,
    createdAt: createdAt,
    createdAtMs: Date.parse(createdAt || ""),
    expiresAt: expiresAt,
    expiresAtMs: Date.parse(expiresAt || ""),
    claimedBy: claimedByRaw,
    claimedByLower: normalizeUsername_(claimedByRaw),
    claimedAt: claimedAt,
    disabled: disabledRaw === "1" || disabledRaw === "true" || disabledRaw === "yes",
  };
}

function readScreenRewards_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const rows = sheet.getRange(2, 1, lastRow - 1, SCREEN_REWARD_HEADERS.length).getValues();
  return rows
    .map((row, index) => parseScreenRewardRow_(row, index + 2))
    .filter((entry) => !!entry);
}

function readRecentScreenRewardsForUser_(sheet, usernameLower, limit, nowMs) {
  const targetLower = normalizeUsername_(usernameLower);
  if (!targetLower) return [];
  const safeLimit = Math.max(1, Math.min(40, Math.floor(Number(limit) || 1)));
  const safeNow = Number(nowMs || Date.now());
  const recentDesc = readRecentRowsByFilter_(
    sheet,
    SCREEN_REWARD_HEADERS.length,
    parseScreenRewardRow_,
    (entry) => {
      if (entry.disabled) return false;
      if (entry.claimedByLower) return false;
      if (entry.targetLower !== targetLower) return false;
      if (Number.isFinite(entry.expiresAtMs) && entry.expiresAtMs <= safeNow) return false;
      return true;
    },
    safeLimit,
    3000,
  );
  recentDesc.reverse();
  return recentDesc;
}

function readFriends_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const rows = sheet.getRange(2, 1, lastRow - 1, FRIEND_HEADERS.length).getValues();
  return rows
    .map((row, index) => {
      const id = sanitizeFriendId_(row[0]);
      const userA = normalizeUsername_(row[1]);
      const userB = normalizeUsername_(row[2]);
      const requester = normalizeUsername_(row[3]);
      const status = sanitizeFriendStatus_(row[4]);
      const createdAt = String(row[5] || "").trim();
      const updatedAt = String(row[6] || "").trim();
      const actedBy = normalizeUsername_(row[7]);
      const disabledRaw = String(row[8] || "").trim().toLowerCase();
      const pairKey = buildFriendPairKey_(userA, userB);
      if (!id || !userA || !userB || !requester || !pairKey) return null;
      return {
        rowNumber: index + 2,
        id: id,
        userA: userA,
        userB: userB,
        userALower: userA.toLowerCase(),
        userBLower: userB.toLowerCase(),
        requester: requester,
        requesterLower: requester.toLowerCase(),
        status: status,
        createdAt: createdAt,
        updatedAt: updatedAt,
        actedBy: actedBy,
        actedByLower: actedBy.toLowerCase(),
        disabled: disabledRaw === "1" || disabledRaw === "true" || disabledRaw === "yes",
        pairKey: pairKey,
      };
    })
    .filter((entry) => !!entry);
}

function readTmTransfers_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const rows = sheet.getRange(2, 1, lastRow - 1, TRANSFER_HEADERS.length).getValues();
  return rows
    .map((row, index) => parseTransferRow_(row, index + 2))
    .filter((entry) => !!entry);
}

function readRecentDmMessagesForPair_(sheet, firstLower, secondLower, limit) {
  const a = normalizeUsername_(firstLower);
  const b = normalizeUsername_(secondLower);
  if (!a || !b) return [];
  const safeLimit = Math.max(1, Math.min(500, Math.floor(Number(limit) || 1)));
  const recentDesc = readRecentRowsByFilter_(
    sheet,
    DM_HEADERS.length,
    parseDmMessageRow_,
    (entry) =>
      (entry.fromLower === a && entry.toLower === b) || (entry.fromLower === b && entry.toLower === a),
    safeLimit,
    RECENT_DM_SCAN_MAX_ROWS,
  );
  recentDesc.reverse();
  return recentDesc;
}

function readRecentDmMessagesForUser_(sheet, usernameLower, limit) {
  const selfLower = normalizeUsername_(usernameLower);
  if (!selfLower) return [];
  const safeLimit = Math.max(1, Math.min(500, Math.floor(Number(limit) || 1)));
  const recentDesc = readRecentRowsByFilter_(
    sheet,
    DM_HEADERS.length,
    parseDmMessageRow_,
    (entry) => entry.fromLower === selfLower || entry.toLower === selfLower,
    safeLimit,
    RECENT_DM_SCAN_MAX_ROWS,
  );
  recentDesc.reverse();
  return recentDesc;
}

function readRecentGroupMessagesById_(sheet, groupId, limit) {
  const safeGroupId = sanitizeGroupId_(groupId);
  if (!safeGroupId) return [];
  const safeLimit = Math.max(1, Math.min(500, Math.floor(Number(limit) || 1)));
  const recentDesc = readRecentRowsByFilter_(
    sheet,
    GROUP_MESSAGE_HEADERS.length,
    parseGroupMessageRow_,
    (entry) => entry.groupId === safeGroupId,
    safeLimit,
    RECENT_GROUP_SCAN_MAX_ROWS,
  );
  recentDesc.reverse();
  return recentDesc;
}

function readRecentTransfersForUser_(sheet, usernameLower, limit) {
  const selfLower = normalizeUsername_(usernameLower);
  if (!selfLower) return [];
  const safeLimit = Math.max(1, Math.min(200, Math.floor(Number(limit) || 1)));
  return readRecentRowsByFilter_(
    sheet,
    TRANSFER_HEADERS.length,
    parseTransferRow_,
    (entry) => !entry.disabled && (entry.fromLower === selfLower || entry.toLower === selfLower),
    safeLimit,
    RECENT_TRANSFER_SCAN_MAX_ROWS,
  );
}

function readShopGifts_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const rows = sheet.getRange(2, 1, lastRow - 1, SHOP_GIFT_HEADERS.length).getValues();
  return rows
    .map((row, index) => {
      const id = sanitizeShopGiftId_(row[0]);
      const fromUsername = normalizeUsername_(row[1]);
      const toUsername = normalizeUsername_(row[2]);
      const itemId = sanitizeShopItemId_(row[3]);
      const itemName = sanitizeShopItemName_(row[4]);
      const itemType = sanitizeShopItemType_(row[5]);
      const priceRaw = parseNonNegativeInt_(row[6]);
      const createdAt = String(row[7] || "").trim();
      const disabledRaw = String(row[8] || "").trim().toLowerCase();
      if (!id || !fromUsername || !toUsername || !itemId || !itemName) return null;
      return {
        rowNumber: index + 2,
        id: id,
        fromUsername: fromUsername,
        fromLower: fromUsername.toLowerCase(),
        fromDisplayName: fromUsername,
        toUsername: toUsername,
        toLower: toUsername.toLowerCase(),
        itemId: itemId,
        itemName: itemName,
        itemType: itemType || "item",
        priceTm: priceRaw === null ? 0 : priceRaw,
        createdAt: createdAt,
        createdAtMs: Date.parse(createdAt || ""),
        disabled: disabledRaw === "1" || disabledRaw === "true" || disabledRaw === "yes",
      };
    })
    .filter((entry) => !!entry);
}

function readTournamentRows_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const rows = sheet.getRange(2, 1, lastRow - 1, TOURNAMENT_HEADERS.length).getValues();
  return rows
    .map((row, index) => {
      const weekKey = String(row[0] || "").trim().toLowerCase();
      const weekStart = String(row[1] || "").trim();
      const weekEnd = String(row[2] || "").trim();
      if (!weekKey) return null;
      return {
        rowNumber: index + 2,
        weekKey: weekKey,
        weekStart: weekStart,
        weekEnd: weekEnd,
        firstUsername: normalizeUsername_(row[3]),
        secondUsername: normalizeUsername_(row[4]),
        thirdUsername: normalizeUsername_(row[5]),
        firstTm: parseNonNegativeInt_(row[6]) || 0,
        secondTm: parseNonNegativeInt_(row[7]) || 0,
        thirdTm: parseNonNegativeInt_(row[8]) || 0,
        processedAt: String(row[9] || "").trim(),
        totalPlayers: parseNonNegativeInt_(row[10]) || 0,
      };
    })
    .filter((entry) => !!entry);
}

function readXpCodes_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const rows = sheet.getRange(2, 1, lastRow - 1, XP_CODE_HEADERS.length).getValues();
  return rows
    .map((row, index) => {
      const id = sanitizeXpCodeId_(row[0]);
      const code = sanitizeXpCodeValue_(row[1]);
      const codeKey = sanitizeXpCodeValue_(row[2] || code);
      const xpRaw = parseNonNegativeInt_(row[3]);
      const createdBy = normalizeUsername_(row[4]);
      const createdAt = String(row[5] || "").trim();
      const expiresAt = String(row[6] || "").trim();
      const expiresAtMs = Date.parse(expiresAt || "");
      const disabledRaw = String(row[7] || "").trim().toLowerCase();
      if (!id || !code || !codeKey) return null;
      return {
        rowNumber: index + 2,
        id: id,
        code: code,
        codeKey: codeKey,
        xpAmount: xpRaw === null ? 0 : xpRaw,
        createdBy: createdBy,
        createdAt: createdAt,
        expiresAt: expiresAt,
        expiresAtMs: expiresAtMs,
        disabled: disabledRaw === "1" || disabledRaw === "true" || disabledRaw === "yes",
      };
    })
    .filter((entry) => !!entry);
}

function parseXpCodeClaimRow_(row, rowNumber) {
  const id = String(row[0] || "").trim();
  const codeId = sanitizeXpCodeId_(row[1]);
  const codeKey = sanitizeXpCodeValue_(row[2]);
  const username = normalizeUsername_(row[3]);
  const claimedAt = String(row[4] || "").trim();
  if (!id || !codeKey || !username) return null;
  return {
    rowNumber: rowNumber,
    id: id,
    codeId: codeId,
    codeKey: codeKey,
    username: username,
    usernameLower: username.toLowerCase(),
    claimedAt: claimedAt,
  };
}

function hasXpCodeClaimForUser_(sheet, codeKey, usernameLower) {
  const safeCodeKey = sanitizeXpCodeValue_(codeKey);
  const safeUser = normalizeUsername_(usernameLower);
  if (!safeCodeKey || !safeUser) return false;

  const chunkSize = Math.max(120, Math.floor(Number(RECENT_SCAN_CHUNK_ROWS) || 400));
  const maxScanRows = 10000;
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;

  let scanned = 0;
  for (let end = lastRow; end >= 2 && scanned < maxScanRows; end -= chunkSize) {
    const start = Math.max(2, end - chunkSize + 1);
    const rowCount = end - start + 1;
    const rows = sheet.getRange(start, 1, rowCount, XP_CODE_CLAIM_HEADERS.length).getValues();
    scanned += rowCount;
    for (let i = rows.length - 1; i >= 0; i -= 1) {
      const entry = parseXpCodeClaimRow_(rows[i], start + i);
      if (!entry) continue;
      if (entry.codeKey !== safeCodeKey) continue;
      if (entry.usernameLower === safeUser) return true;
    }
  }
  return false;
}

function readXpCodeClaims_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const rows = sheet.getRange(2, 1, lastRow - 1, XP_CODE_CLAIM_HEADERS.length).getValues();
  return rows
    .map((row, index) => parseXpCodeClaimRow_(row, index + 2))
    .filter((entry) => !!entry);
}

function readFeedback_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const rows = sheet.getRange(2, 1, lastRow - 1, FEEDBACK_HEADERS.length).getValues();
  return rows
    .map((row, index) => {
      const id = sanitizeFeedbackId_(row[0]);
      const username = normalizeUsername_(row[1]);
      const displayName = sanitizeDisplayName_(row[2] || username);
      const name = sanitizeFeedbackName_(row[3]);
      const email = sanitizeFeedbackEmail_(row[4]);
      const phone = sanitizeFeedbackPhone_(row[5]);
      const rating = sanitizeFeedbackRating_(row[6]);
      const feedback = sanitizeFeedbackText_(row[7]);
      const status = sanitizeFeedbackStatus_(row[8]);
      const adminNote = sanitizeFeedbackAdminNote_(row[9]);
      const createdAt = String(row[10] || "").trim();
      const updatedAt = String(row[11] || "").trim();
      const updatedBy = normalizeUsername_(row[12]);
      const disabledRaw = String(row[13] || "").trim().toLowerCase();
      if (!id || !username || !feedback || rating <= 0) return null;
      return {
        rowNumber: index + 2,
        id: id,
        username: username,
        usernameLower: username.toLowerCase(),
        displayName: displayName || username,
        name: name || displayName || username,
        email: email,
        phone: phone,
        rating: rating,
        feedback: feedback,
        status: status,
        adminNote: adminNote,
        createdAt: createdAt,
        createdAtMs: Date.parse(createdAt || ""),
        updatedAt: updatedAt,
        updatedAtMs: Date.parse(updatedAt || ""),
        updatedBy: updatedBy,
        disabled: disabledRaw === "1" || disabledRaw === "true" || disabledRaw === "yes",
      };
    })
    .filter((entry) => !!entry);
}

function writeAccountRow_(sheet, account) {
  const rowValues = [
    account.username || "",
    account.displayName || account.username || "",
    account.passwordHash || "",
    account.role === "admin" ? "admin" : "user",
    account.createdAt || "",
    account.updatedAt || "",
    account.sessionToken || "",
    account.sessionExpiresAt || "",
    account.disabled ? "1" : "0",
    JSON.stringify(normalizeProfile_(account.profile)),
    account.passwordPlain || "",
    account.lockUntilMs || "",
    account.lockMessage || "",
    account.lockSetBy || "",
    account.lockSetAt || "",
  ];
  sheet.getRange(account.rowNumber, 1, 1, ACCOUNT_HEADERS.length).setValues([rowValues]);
  clearAccountsCache_();
}

function buildHeaderMap_(headerRow) {
  const map = {};
  ACCOUNT_HEADERS.forEach((header, index) => {
    map[header] = index;
  });
  headerRow.forEach((value, index) => {
    const key = String(value || "").trim().toLowerCase();
    if (key) map[key] = index;
  });
  return map;
}

function getCellByHeader_(row, headerMap, key, fallbackIndex) {
  const index = headerMap[key];
  if (typeof index === "number" && index >= 0 && index < row.length) return row[index];
  if (fallbackIndex >= 0 && fallbackIndex < row.length) return row[fallbackIndex];
  return "";
}

function normalizeUsername_(value) {
  const cleaned = String(value || "")
    .trim()
    .toLowerCase();
  if (!/^[a-z0-9._-]{3,24}$/.test(cleaned)) return "";
  return cleaned;
}

function sanitizeDisplayName_(value) {
  const name = String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 24);
  return name || "Player";
}

function defaultProfile_() {
  return {
    xp: 0,
    rank: "Rookie",
    tm: 0,
    streak: 0,
  };
}

function parseProfileJson_(value) {
  const raw = String(value || "").trim();
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (_error) {
    return {};
  }
}

function toSafeInt_(value, fallback) {
  const numeric = Math.floor(Number(value));
  if (!Number.isFinite(numeric)) return fallback;
  return Math.max(0, numeric);
}

function parseNonNegativeInt_(value) {
  const numeric = Math.floor(Number(value));
  if (!Number.isFinite(numeric)) return null;
  return Math.max(0, numeric);
}

function parseLockUntilMs_(value) {
  const numeric = Math.floor(Number(value));
  if (!Number.isFinite(numeric) || numeric <= 0) return 0;
  return numeric;
}

function sanitizeGlobalBannerText_(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 180);
}

function readUiSettingsMap_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return {};
  const rows = sheet.getRange(2, 1, lastRow - 1, UI_SETTINGS_HEADERS.length).getValues();
  const map = {};
  rows.forEach((row, index) => {
    const key = String(row[0] || "").trim().toLowerCase();
    if (!key) return;
    map[key] = {
      rowNumber: index + 2,
      value: String(row[1] || "").trim(),
      updatedAt: String(row[2] || "").trim(),
      updatedBy: String(row[3] || "").trim(),
    };
  });
  return map;
}

function upsertUiSetting_(sheet, key, value, updatedBy) {
  const safeKey = String(key || "").trim().toLowerCase();
  if (!safeKey) return;
  const safeValue = String(value || "");
  const nowIso = new Date().toISOString();
  const actor = normalizeUsername_(updatedBy) || "";
  const settings = readUiSettingsMap_(sheet);
  const existing = settings[safeKey];
  if (existing && existing.rowNumber >= 2) {
    sheet.getRange(existing.rowNumber, 1, 1, UI_SETTINGS_HEADERS.length).setValues([
      [safeKey, safeValue, nowIso, actor],
    ]);
    return;
  }
  sheet.appendRow([safeKey, safeValue, nowIso, actor]);
}

function readGlobalBannerConfig_() {
  const sheet = getUiSettingsSheet_();
  const settings = readUiSettingsMap_(sheet);
  const text = sanitizeGlobalBannerText_(settings[GLOBAL_BANNER_TEXT_SETTING_KEY]?.value || "");
  return {
    text: text || DEFAULT_GLOBAL_BANNER_TEXT,
    colorA: "",
    colorB: "",
    accent: "",
    updatedAt: String(settings[GLOBAL_BANNER_TEXT_SETTING_KEY]?.updatedAt || "").trim(),
    updatedBy: normalizeUsername_(settings[GLOBAL_BANNER_TEXT_SETTING_KEY]?.updatedBy || ""),
  };
}

function writeGlobalBannerConfig_(config, updatedBy) {
  const next = config && typeof config === "object" ? config : {};
  const text = sanitizeGlobalBannerText_(next.text || "") || DEFAULT_GLOBAL_BANNER_TEXT;
  const sheet = getUiSettingsSheet_();
  upsertUiSetting_(sheet, GLOBAL_BANNER_TEXT_SETTING_KEY, text, updatedBy);
  // Keep legacy keys cleared so colors remain theme-driven.
  upsertUiSetting_(sheet, GLOBAL_BANNER_COLOR_A_SETTING_KEY, "", updatedBy);
  upsertUiSetting_(sheet, GLOBAL_BANNER_COLOR_B_SETTING_KEY, "", updatedBy);
  upsertUiSetting_(sheet, GLOBAL_BANNER_ACCENT_SETTING_KEY, "", updatedBy);
}

function sanitizeLockMessage_(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 160);
}

function clearAccountLockFields_(account) {
  account.lockUntilMs = "";
  account.lockMessage = "";
  account.lockSetBy = "";
  account.lockSetAt = "";
}

function getActiveAccountLock_(account, nowMs) {
  const untilMs = parseLockUntilMs_(account && account.lockUntilMs);
  if (!untilMs || untilMs <= Number(nowMs || 0)) {
    return { locked: false, untilMs: 0, message: "", untilAdminUnlock: false };
  }
  const untilAdminUnlock = untilMs >= LOCK_UNTIL_ADMIN_UNLOCK_MS - 1000;
  const message = sanitizeLockMessage_(account && account.lockMessage) || "Take a break and come back later.";
  return {
    locked: true,
    untilMs: untilMs,
    message: message,
    untilAdminUnlock: untilAdminUnlock,
  };
}

function buildAccountLockPayload_(lockState) {
  const state = lockState && typeof lockState === "object" ? lockState : {};
  const locked = Boolean(state.locked);
  const untilMs = parseLockUntilMs_(state.untilMs);
  const untilAdminUnlock = Boolean(state.untilAdminUnlock);
  return {
    locked: locked,
    lockUntilMs: locked ? untilMs : 0,
    lockUntilAdminUnlock: locked && untilAdminUnlock,
    lockUntil: locked && !untilAdminUnlock && untilMs ? new Date(untilMs).toISOString() : "",
    message: locked ? sanitizeLockMessage_(state.message || "") : "",
  };
}

function normalizeNumericAdminField_(value) {
  const field = String(value || "").trim().toLowerCase();
  if (field === "xp") return "xp";
  if (field === "tm" || field === "money" || field === "dollars" || field === "tm$") return "tm";
  if (field === "streak") return "streak";
  return "";
}

function sanitizeGroupName_(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 60);
}

function sanitizeScreenRewardLabel_(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 40);
}

function sanitizeScreenRewardMessage_(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 120);
}

function sanitizeScreenRewardId_(value) {
  const raw = String(value || "")
    .trim()
    .toLowerCase();
  if (!/^srw_[a-z0-9_-]{12,220}$/.test(raw)) return "";
  return raw;
}

function sanitizeFriendId_(value) {
  const raw = String(value || "")
    .trim()
    .toLowerCase();
  if (!/^frd_[a-z0-9_-]{12,220}$/.test(raw)) return "";
  return raw;
}

function sanitizeFriendStatus_(value) {
  const status = String(value || "")
    .trim()
    .toLowerCase();
  if (status === "accepted" || status === "rejected") return status;
  return "pending";
}

function buildFriendPairKey_(userOne, userTwo) {
  const first = normalizeUsername_(userOne);
  const second = normalizeUsername_(userTwo);
  if (!first || !second || first === second) return "";
  return [first, second].sort().join("|");
}

function areUsersFriends_(userOne, userTwo) {
  const pairKey = buildFriendPairKey_(userOne, userTwo);
  if (!pairKey) return false;
  const rows = readFriendsCached_(getFriendSheet_());
  const found = rows.find((entry) => !entry.disabled && entry.pairKey === pairKey);
  return Boolean(found && found.status === "accepted");
}

function sanitizeTransferId_(value) {
  const raw = String(value || "")
    .trim()
    .toLowerCase();
  if (!/^tmx_[a-z0-9_-]{12,220}$/.test(raw)) return "";
  return raw;
}

function sanitizeTransferNote_(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, 120);
}

function sanitizeShopGiftId_(value) {
  const raw = String(value || "")
    .trim()
    .toLowerCase();
  if (!/^shg_[a-z0-9_-]{12,220}$/.test(raw)) return "";
  return raw;
}

function sanitizeShopItemId_(value) {
  const raw = String(value || "")
    .trim()
    .toLowerCase();
  if (!/^[a-z0-9._-]{2,80}$/.test(raw)) return "";
  return raw;
}

function sanitizeShopItemName_(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 80);
}

function sanitizeShopItemType_(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .slice(0, 40);
}

function sanitizeXpCodeId_(value) {
  const raw = String(value || "")
    .trim()
    .toLowerCase();
  if (!/^xpc_[a-z0-9._-]{8,220}$/.test(raw)) return "";
  return raw;
}

function sanitizeXpCodeValue_(value) {
  const raw = String(value || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9_-]/g, "");
  if (raw.length < 4 || raw.length > 32) return "";
  return raw;
}

function sanitizeFeedbackId_(value) {
  const raw = String(value || "")
    .trim()
    .toLowerCase();
  if (!/^fbk_[a-z0-9_-]{12,220}$/.test(raw)) return "";
  return raw;
}

function sanitizeFeedbackName_(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 40);
}

function sanitizeFeedbackEmail_(value) {
  const email = String(value || "")
    .trim()
    .toLowerCase()
    .slice(0, 120);
  if (!email) return "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "";
  return email;
}

function sanitizeFeedbackPhone_(value) {
  const phone = String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 30);
  if (!phone) return "";
  if (!/^[0-9+\-().\s]{6,30}$/.test(phone)) return "";
  return phone;
}

function sanitizeFeedbackRating_(value) {
  const rating = Math.floor(Number(value));
  if (!Number.isFinite(rating)) return 0;
  if (rating < 1 || rating > 5) return 0;
  return rating;
}

function sanitizeFeedbackText_(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, 1200);
}

function sanitizeFeedbackStatus_(value) {
  const status = String(value || "")
    .trim()
    .toLowerCase();
  if (status === "reviewed" || status === "resolved") return status;
  return "new";
}

function sanitizeFeedbackAdminNote_(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, 240);
}

function parseFutureDateMs_(value) {
  const raw = String(value || "").trim();
  if (!raw) return NaN;
  const ms = Date.parse(raw);
  if (!Number.isFinite(ms)) return NaN;
  return ms;
}

function sanitizeGroupId_(value) {
  const raw = String(value || "")
    .trim()
    .toLowerCase();
  if (!/^grp_[a-z0-9._-]{8,120}$/.test(raw)) return "";
  return raw;
}

function parseUsernameArray_(value) {
  const raw = String(value || "").trim();
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const unique = {};
    parsed.forEach((entry) => {
      const username = normalizeUsername_(entry);
      if (!username) return;
      unique[username.toLowerCase()] = username;
    });
    return Object.keys(unique).map((key) => unique[key]);
  } catch (_error) {
    return [];
  }
}

function sanitizeDmBody_(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, 500);
}

function createMessageId_(prefix) {
  const safePrefix = String(prefix || "dm")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, 10) || "dm";
  return safePrefix + "_" + Utilities.getUuid() + "_" + String(Date.now());
}

function createGroupId_() {
  return "grp_" + Utilities.getUuid().replace(/[^a-z0-9]/gi, "").toLowerCase();
}

function sendDirectMessageCore_(auth, toUsernameValue, bodyValue) {
  const toUsername = normalizeUsername_(toUsernameValue);
  if (!toUsername) return { success: false, message: "Invalid recipient username." };
  if (toUsername === auth.account.usernameLower) {
    return { success: false, message: "You cannot direct message yourself." };
  }

  const target = auth.accounts.find((entry) => entry.usernameLower === toUsername && !entry.disabled);
  if (!target) return { success: false, message: "Recipient account not found." };

  const body = sanitizeDmBody_(bodyValue);
  if (!body) return { success: false, message: "Message cannot be empty." };

  const nowIso = new Date().toISOString();
  const messageId = createMessageId_("dm");
  getDmSheet_().appendRow([messageId, auth.account.username, target.username, body, nowIso]);
  return {
    success: true,
    message: {
      id: messageId,
      fromUsername: auth.account.username,
      toUsername: target.username,
      body: body,
      createdAt: nowIso,
    },
  };
}

function normalizeProfile_(value) {
  const base = defaultProfile_();
  const source = value && typeof value === "object" ? value : {};
  const xp = toSafeInt_(source.xp, base.xp);
  const tm = toSafeInt_(source.tm, base.tm);
  const streak = toSafeInt_(source.streak, base.streak);
  const rankRaw = String(source.rank || "").trim();
  const rank = rankRaw ? rankRaw.slice(0, 40) : base.rank;
  return {
    xp: xp,
    rank: rank,
    tm: tm,
    streak: streak,
  };
}

function hashPassword_(password) {
  const digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    String(password || ""),
    Utilities.Charset.UTF_8,
  );
  return digest
    .map((byte) => {
      const normalized = byte < 0 ? byte + 256 : byte;
      const hex = normalized.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");
}

function createSessionToken_() {
  return [Utilities.getUuid(), Utilities.getUuid(), String(Date.now())].join(".");
}

function safeEquals_(a, b) {
  return String(a || "") === String(b || "");
}

function parseRequest_(e) {
  if (!e || !e.postData || !e.postData.contents) return {};
  try {
    const parsed = JSON.parse(e.postData.contents);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (_error) {
    return {};
  }
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
