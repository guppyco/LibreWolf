/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//---------------------- Updates ---------------------------------------------
// URL user can browse to manually if for some reason all update installation attempts fail.
pref("app.update.url.manual", "https://github.com/librewolf-browser");

// A default value for the "More information about this update" link supplied in 
//the "An update is available" page of the update wizard.
pref("app.update.url.details", "https://github.com/librewolf-browser");

// The time interval between checks for a new version (in seconds)
pref("app.update.interval", 86400); // 24 hours

// Give the user x seconds to react before showing the big UI.
pref("app.update.promptWaitTime", 86400); // 24 hours

// The number of days a binary is permitted to be old without checking for an update.  
// This assumes that app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 2); 

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=immediately
pref("app.update.badgeWaitTime", 0);

// Number of usages of the web console or scratchpad.
// If this is less than 5, then pasting code into the web console or scratchpad is disabled
pref("devtools.selfxss.count", 5);
