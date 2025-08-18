// ===============================
// Cache
// ===============================
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.memory.enable", true);

// ===============================
// Startup / Session
// ===============================
user_pref("browser.startup.page", 0); // 0 = blank page
user_pref("browser.sessionstore.resume_from_crash", false); // jangan restore crash otomatis

// ===============================
// Password Manager (Primary Password)
// ===============================
user_pref("signon.rememberSignons", true); // aktifkan simpan password
user_pref("signon.autofillForms", true);  // aktifkan autofill
user_pref("signon.autologin.proxy", true); // proxy login otomatis (opsional)

// Aktifkan Primary Password (Master Password)
user_pref("security.ask_for_password", 1); // selalu minta Primary Password saat butuh password
user_pref("security.password_lifetime", 0); // tidak menyimpan Primary Password di session

// ===============================
// Performance
// ===============================
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("gfx.webrender.all", true);

// ===============================
// Privacy (basic, tidak terlalu strict)
// ===============================
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// ===============================
// Optional tambahan keamanan
// ===============================
// Jangan otomatis menyarankan simpan password
user_pref("signon.autofillForms.http", false); 
user_pref("signon.storeWhenAutocompleteOff", false);

