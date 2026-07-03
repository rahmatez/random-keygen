# 1

Secure Password Generator
Generate cryptographically secure passwords with strength visualization, passphrase mode, pronounceable passwords, and bulk CSV export. Advanced password generator with manager integration guides.

Generator Mode

Random
Traditional random passwords

Passphrase
Memorable word combinations

Pronounceable
Easy to say passwords

Memorable
Pattern-based passwords
Length

16
Character Types

Lowercase (a-z)

Uppercase (A-Z)

Numbers (0-9)

Symbols (!@#$%^&\*)

Exclude ambiguous (0O1lI)
Generate
Entropy:
99 bits
(74 characters in set)
Generated Passwords
+zaY8Yv@pQqa-^IM

Strong
104 bits • Universe age+
GvAQfHBrb7eWJc5&

Strong
104 bits • Universe age+
sJei3F!yN-HE%R3s

Strong
104 bits • Universe age+
6C=g6!Y#O#R!sp^K

Strong
104 bits • Universe age+
q#jHid!iwF^%+i$w

Strong
102 bits • Universe age+
Add numbers (0-9)
cv-@PBVjD!H$hvMe

Strong
102 bits • Universe age+
Add numbers (0-9)
Password strength guide

Entropy Levels:
50-69 bits: Minimum for online accounts
70-99 bits: Good for most accounts
100-127 bits: Strong protection
128+ bits: Excellent for critical accounts
Mode Recommendations:
Passphrase: Easy to remember, very secure
Random: Maximum entropy per character
Pronounceable: Balance of usability and security
Memorable: Pattern-based, moderate security
Bulk Generation
Generate

10
passwords
Generate
Export 100 to CSV
Downloads a CSV file with 100 passwords and their strength analysis

Password Manager Integration
1Password

# 1Password CLI op item create --category=login --title="My Account" --vault="Private" login.username=user login.password="$(node -e 'console.log(require("crypto").randomBytes(16).toString("hex"))')"

Generate and store passwords directly in 1Password

Bitwarden

# Bitwarden CLI bw generate --length 20 --uppercase --lowercase --number --special bw create item '{"type":1,"name":"My Account","login":{"username":"user","password":"generated_password"}}'

Create secure entries with Bitwarden CLI

KeePass

# For import into KeePass echo "Group,Title,Username,Password,URL" > passwords.csv echo "Internet,My Account,user,$(openssl rand -base64 20 | tr -dc 'a-zA-Z0-9!@#$%^&\*' | head -c16),https://example.com" >> passwords.csv

Generate CSV format for KeePass import

Generate in Terminal
OpenSSL with special characters

openssl rand -base64 12 | tr -dc 'a-zA-Z0-9!@#$%^&\*' | head -c 16

Linux /dev/urandom

LC_ALL=C tr -dc 'a-zA-Z0-9!@#$%^&\*' < /dev/urandom | head -c 16

Python secrets module

python3 -c "import secrets; import string; print(''.join(secrets.choice(string.ascii*letters + string.digits + '!@#$%^&\*') for * in range(16)))"

Related Tools
8 Character Password
Legacy system compatible
Password Strength Checker
Test your password security
Passphrase Generator
Easy to remember passwords
Memorable Passwords
Word-based passwords
PIN Generator
Secure 4-6 digit PINs
Security Tips

- Use unique passwords for every account
- Enable 2FA wherever possible
- Use a password manager to store credentials
- Never share passwords via email or text

# 2

Passphrase Generator
Generate memorable passphrases using the EFF wordlist. Easier to remember than random characters, but still cryptographically strong.

Words

4 words
Separator

Hyphen (-)

Capitalize words
Generate
Entropy:
38 bits
(768 word vocabulary)
pact-jar-win-naive

aisle-world-wool-wisdom

mandate-object-alter-ocean

endorse-neglect-gauge-alarm

salt-hero-zone-law

Why passphrases?

Passphrases like correct-horse-battery-staple are often more secure than complex passwords because they're longer and harder to crack, while being easier to remember.

A 4-word passphrase from a 7,776-word list has approximately 52 bits of entropy, equivalent to a random 8-character password using all character types.

Bulk Generation
Generate

10
passphrases
Generate
Generate in Terminal
For production systems, consider generating passphrases locally:

Linux (using system dictionary)

shuf -n 4 /usr/share/dict/words | tr '\n' '-' | sed 's/-$//'

Python (with custom wordlist)

python3 -c "import secrets; words=['apple','banana','cherry',...]; print('-'.join(secrets.choice(words) for \_ in range(4)))"

# 3

Pronounceable Password Generator
Generate secure passwords that are easy to pronounce and say out loud. Perfect for sharing over phone or when you need to read a password to someone.

Length

12
Options

Capitalize some letters

Include numbers
Estimated entropy:
~50 bits
Generate
TiPowukic9x8

BifusUz9w4da

Hohu3o4erEba

Naxuje52taZO

GekoM3Luku2a

X9Ho0edewepo

G3zufuge3Uto

To2u6itebEca

How pronounceable passwords work

These passwords use alternating consonant-vowel patterns (like "ba-ke-lo-mi") which makes them easier to say and remember while still being secure. The tradeoff is slightly lower entropy compared to fully random passwords.

For maximum security with memorability, consider using a passphrase instead.

Related Generators
Passphrase
Memorable Password
Random Password
Bulk Generation
Generate

10
passwords
Generate

# 4

Memorable Password Generator
Generate passwords that are both secure AND easy to remember. Using word-based patterns makes passwords memorable without sacrificing security.

Style

Words (Correct-Horse-Battery)
Word Count

4 words (recommended)
Separator

Hyphen (-)
Generate
Entropy:
~38 bits
(4 words from 768 word list)
Edit-Major-Around-Base

Battle-Enable-Actress-Olive

Eight-Nephew-Uncle-Hammer

Tennis-Approve-Often-Garlic

Wealth-Laptop-Universe-Endless

Why Word-Based Passwords?
As famously illustrated by XKCD #936, a password like correct-horse-battery-staple is both easier to remember AND more secure than something like Tr0ub4dor&3.

Tr0ub4dor&3
~28 bits entropy, hard to remember
correct-horse-battery-staple
~44 bits entropy, easy to remember
Tips for Memorable Passwords

Create a mental image or story connecting the words
4+ words provides excellent security (comparable to 12+ random characters)
Adding a number or symbol increases security with minimal memory burden
Each additional word doubles the time to crack
Still use unique passwords for each account - use a password manager!
Security Comparison
Words Entropy Equivalent Random Chars
3 words ~39 bits ~8 random characters
4 words ~52 bits ~10 random characters
5 words ~64 bits ~12 random characters
6 words ~77 bits ~14 random characters
Bulk Generation
Generate

10
passwords
Generate

# 5

Master Password Generator
Generate an ultra-secure master password for your password manager. This is the most important password you'll ever create - make it strong.

Type
Passphrase (Recommended)
Random
Words
4 words
5 words
6 words
7 words
Entropy:
47 bits
Good
Generate
47 bits

almost-web-wasp-blanket-joke

47 bits

announce-omit-few-arena-become

47 bits

laugh-yellow-help-earn-glimpse

47 bits

joy-talk-outer-deposit-hidden

Master password security is critical

Memorize it - Don't write it down anywhere digitally
Never reuse - Use it only for your password manager
Enable 2FA - Add another layer of protection
Write it down securely - Store a physical backup in a safe place (safety deposit box)
Test your memory - Practice typing it before relying on it
Why passphrases are recommended
A 5-word passphrase like correct-horse-battery-staple is easier to remember than a random string but can have comparable entropy. The key is using truly random words, not a phrase you make up.

Learn more about passphrases →

# 6

Bulk Password Generator
Generate hundreds of secure passwords at once. Perfect for user onboarding, IT administration, and creating test accounts.

Count
10
25
50
100
250
500
Length: 16

Characters
a-z
A-Z
0-9
!@#$
Generate 50 Passwords
Entropy per password:
95 bits
Copy All
Download CSV
Download TXT

1.  rKmqWKyemPXY85vl
2.  l1mZz3RtJBwHf3tT
3.  kBO9ZgjlAaYjAcCl
4.  Wokrtyhf0neSvnMi
5.  dlkrEu6mtMna9UaB
6.  OVTQuoM6SRT8PPqV
7.  ot8MacrJGy7UstWn
8.  grFmYkZ6cvYXBaEL
9.  6wGpvIGFxE0SAvbQ
10. 1uyFlidax8cTcjE1
11. CIs2kqpbw6SffMm0
12. BhH68UiT9qG5przi
13. jP78KvlAbOQdUTKM
14. rJhrsLNwkmPplV9Z
15. SQjW066Xx0Z0cvqI
16. oUItvI0JvUlvR1gI
17. qUrX3igXquBRDyeU
18. QP6UEdoiw2rpicZV
19. KhsbaDOyHCKOrcov
20. A0J9JU2HgQ2mqKeK
21. O05HHgaG4a9hAAg5
22. xgrV1Slqhkz0HKuI
23. 316Vv2aA1La8phvL
24. uiuLcp2jcaVQq3P4
25. kvH4Da6i1P0tOBFo
26. gA8IoLDf3NpZ2UyM
27. hOr9cHzuGHhJuv10
28. AjhjjQajQPsojArk
29. aXXYjaF3clRlvJnr
30. WbOoJNlWRBezGREP
31. 0YkqmxkGtQ6J9Gis
32. 4wiEYfNfoKHEwWN6
33. lNAZQia9yjffA2gX
34. YjcOJD1JNbbxwuH4
35. o6s0xcIrCbOdOIS8
36. 72btfl08pcFlwENI
37. EClAGJ96j29VqysT
38. lNcVQQeLDCUVOUaS
39. RyiqkqZUC5l5LEWd
40. fFUQhU4eCvOdCKYV
41. kadkOT3WOaheBgsM
42. ZBK9ocxX6l67KqGv
43. iujwGjWK9We0Qrsi
44. bUY6EnXdHhNOiod8
45. 3dcANhNXrHqOowZW
46. ZyP2wr6Z3sjgRSRr
47. K2CcYnoVLPDwhzxI
48. CKjdy4EGJZuU4aTQ
49. pRUtrudqrjWBZ5d4
50. lbYKLeu2QDQIbw4J
    Click any password to copy it individually

Use cases for bulk passwords

User onboarding - Generate initial passwords for new employees
Testing - Create test accounts for QA and development
WiFi guest networks - Rotating access credentials
Event registration - Temporary access codes for attendees
Database seeding - Populate test data with realistic passwords
Security reminder

When distributing bulk passwords, always use secure channels (not plain email) and require users to change their password on first login.

# 7

Bulk Password Generator
Generate hundreds of secure passwords at once. Perfect for user onboarding, IT administration, and creating test accounts.

Count
10
25
50
100
250
500
Length: 16

Characters
a-z
A-Z
0-9
!@#$
Generate 50 Passwords
Entropy per password:
95 bits
Copy All
Download CSV
Download TXT

1.  rKmqWKyemPXY85vl
2.  l1mZz3RtJBwHf3tT
3.  kBO9ZgjlAaYjAcCl
4.  Wokrtyhf0neSvnMi
5.  dlkrEu6mtMna9UaB
6.  OVTQuoM6SRT8PPqV
7.  ot8MacrJGy7UstWn
8.  grFmYkZ6cvYXBaEL
9.  6wGpvIGFxE0SAvbQ
10. 1uyFlidax8cTcjE1
11. CIs2kqpbw6SffMm0
12. BhH68UiT9qG5przi
13. jP78KvlAbOQdUTKM
14. rJhrsLNwkmPplV9Z
15. SQjW066Xx0Z0cvqI
16. oUItvI0JvUlvR1gI
17. qUrX3igXquBRDyeU
18. QP6UEdoiw2rpicZV
19. KhsbaDOyHCKOrcov
20. A0J9JU2HgQ2mqKeK
21. O05HHgaG4a9hAAg5
22. xgrV1Slqhkz0HKuI
23. 316Vv2aA1La8phvL
24. uiuLcp2jcaVQq3P4
25. kvH4Da6i1P0tOBFo
26. gA8IoLDf3NpZ2UyM
27. hOr9cHzuGHhJuv10
28. AjhjjQajQPsojArk
29. aXXYjaF3clRlvJnr
30. WbOoJNlWRBezGREP
31. 0YkqmxkGtQ6J9Gis
32. 4wiEYfNfoKHEwWN6
33. lNAZQia9yjffA2gX
34. YjcOJD1JNbbxwuH4
35. o6s0xcIrCbOdOIS8
36. 72btfl08pcFlwENI
37. EClAGJ96j29VqysT
38. lNcVQQeLDCUVOUaS
39. RyiqkqZUC5l5LEWd
40. fFUQhU4eCvOdCKYV
41. kadkOT3WOaheBgsM
42. ZBK9ocxX6l67KqGv
43. iujwGjWK9We0Qrsi
44. bUY6EnXdHhNOiod8
45. 3dcANhNXrHqOowZW
46. ZyP2wr6Z3sjgRSRr
47. K2CcYnoVLPDwhzxI
48. CKjdy4EGJZuU4aTQ
49. pRUtrudqrjWBZ5d4
50. lbYKLeu2QDQIbw4J
    Click any password to copy it individually

Use cases for bulk passwords

User onboarding - Generate initial passwords for new employees
Testing - Create test accounts for QA and development
WiFi guest networks - Rotating access credentials
Event registration - Temporary access codes for attendees
Database seeding - Populate test data with realistic passwords
Security reminder

When distributing bulk passwords, always use secure channels (not plain email) and require users to change their password on first login.

# 8

Password Generator
/
16 Characters
16 Character Password Generator
Generate secure 16-character passwords. This length provides excellent security for most applications.

Include

a-z

A-Z

0-9

!@#$%
Entropy:
99 bits
Generate
K=EyKr8Omo2ziYDV

&pgIkcHPRcIlpAXC

ajB@%bog4T3ldiTb

\*yA%igTKthmqO5G#

lAio6ruvlQPVn^T6

x6B\*HQ#Faecoa09k

qU69nxK7E5Z^\*gHB

nl$3N5FA@OAG#MpL

Other Lengths
8 characters
12 characters
20 characters
24 characters
32 characters
Bulk Generation
Generate

10
passwords
Generate

# 9

Password Generator Without Special Characters
Generate secure passwords using only letters and numbers. Perfect for systems that don't allow special characters or have strict character restrictions.

Length

16
Include

Lowercase (a-z)

Uppercase (A-Z)

Numbers (0-9)
Entropy:
95 bits
(62 characters in set)
Generate
95 bits

yMTwkBwmygpnflv1

95 bits

nw8DRR8l0pvg1VdK

95 bits

BjnaYbvx1FfS5blF

95 bits

HrxDjEyufoKUiVV6

95 bits

LKX24ah76Dof5w4m

95 bits

CQY4hX2lefWnahxf

95 bits

z0BcmOfP219FiNbJ

95 bits

Al2xfnOpV8xJyOQR

When to use alphanumeric passwords

Older systems that don't support special characters
WiFi passwords shared verbally
Systems with strict character whitelists
Applications where special chars cause escaping issues
Since there's no symbols, consider using a longer password (20+ chars) to maintain security.

Other Password Types
Full Character Set
Letters Only
Pronounceable
Passphrase
Bulk Generation
Generate

10
passwords
Generate

# 10

Letters Only Password Generator
Generate passwords using only alphabetic characters. No numbers or symbols - just letters from A to Z.

Length

20
Case

Lowercase (a-z)

Uppercase (A-Z)
Entropy:
114 bits
(52 characters)
Generate
114 bits

BmxmhfbyVqqhbWUSjnXC

114 bits

EVHCokvlItTXyCpaFvLd

114 bits

akIdAyxfBlwZLtobgpFU

114 bits

FqcGoqeijzLnKDzhGlnh

114 bits

vMkAWsYvdtrkXIbypbAf

114 bits

NcJQuWzpywtvNnnwQsFp

114 bits

bFWPNPqsCEcbbximufLN

114 bits

GzTWCUqheVXMJYiwWlmk

Other Password Types
Full Character Set
Alphanumeric
Numbers Only
Pronounceable
Bulk Generation
Generate

10
passwords
Generate

# 11

PIN Generator
Generate cryptographically secure random PIN codes. Perfect for ATM cards, phone locks, app passcodes, and security systems.

PIN Length

4 digits (standard)
Generate
Possible combinations:
10,000
4973
Click to copy
9296
Click to copy
0364
Click to copy
7157
Click to copy
5266
Click to copy
0550
Click to copy
8135
Click to copy
6241
Click to copy
Generate more PINs
PIN Generator Use Cases
ATM & Banking PINs
Debit cards, credit cards, and ATM access. Most banks require 4-digit PINs, though some allow 5-6 digits for enhanced security.

Device PINs
Smartphone screen locks, tablet security, laptop TPM chips, and smart device access codes. 4-6 digits are most common.

SIM Card PUKs
Personal Unblocking Keys for SIM cards are typically 8-digit codes. Essential backup codes for mobile phone security.

Parental Control PINs
TV parental controls, gaming console restrictions, router settings, and streaming service child locks.

App & Service PINs
Banking apps, password managers, secure messaging apps, and financial service passcodes.

Security Systems
Home alarms, building access, safes, keypad locks, and access control systems.

PIN Security Tips

Avoid obvious PINs: 1234, 0000, 1111, birth years
Don't use the same PIN for multiple accounts
Use 6+ digits when possible (100x more combinations than 4 digits)
Never write your PIN on your card or store it nearby
Shield the keypad when entering your PIN in public
Most Common PINs to Avoid
These PINs account for over 25% of all 4-digit PINs used. Never use them:

1234
1111
0000
1212
7777
1004
2000
4444
2222
6969
9999
3333
5555
6666
1122
1313
PIN Security FAQ
What makes a PIN secure?
A secure PIN is completely random, not based on personal information (birthdays, addresses), and at least 6 digits when possible. Avoid sequential numbers (1234) or repeated digits (1111).

How many digits should my PIN be?
Use the longest PIN your system allows. 4 digits = 10,000 combinations, 6 digits = 1,000,000 combinations. For critical accounts, always choose 6+ digits when available.

Should I use the same PIN for multiple accounts?
No. Use unique PINs for different accounts and devices. If one PIN is compromised, your other accounts remain secure. Consider using a password manager to track different PINs.

How do I remember multiple random PINs?
Write them down and store securely in a password manager or encrypted note app. For ATM cards, many banks allow you to change your PIN to something more memorable while still secure.

Can someone guess my PIN by watching me type?
Yes, this is called "shoulder surfing." Always shield the keypad when entering your PIN, especially at ATMs and in public places. Be aware of cameras and people nearby.

Bulk Generation
Generate

10
PINs
Generate
PIN Length Comparison
Length Combinations Time to Guess (3 tries/day)
4 digits 10,000 ~9 years
5 digits 100,000 ~91 years
6 digits 1,000,000 ~913 years
8 digits 100,000,000 ~91,324 years

# 12

Password Strength Checker
Test how secure your password is. Get instant feedback on strength, estimated crack time, and suggestions for improvement.

Enter Password to Check
Type or paste a password...
Show
Strength:
No Password
Your Privacy

This tool runs entirely in your browser. Your password is never sent to any server, stored, or logged. You can verify this by disconnecting from the internet and testing - it will still work.

Need a Strong Password?
Generate a cryptographically secure password with our generator:

Password Generator
Passphrase Generator
Password Best Practices
Do
• Use 12+ characters minimum
• Mix uppercase, lowercase, numbers, symbols
• Use a unique password for each account
• Consider using a passphrase
• Use a password manager
Don't
• Use personal info (names, birthdays)
• Use common words or phrases
• Use keyboard patterns (qwerty, 123456)
• Reuse passwords across sites
• Share passwords via email or text
How Password Strength Is Calculated
Password strength is calculated based on several factors:

Entropy - A measure of randomness based on password length and character set diversity. Higher entropy = more combinations to guess.
Character Variety - Using lowercase, uppercase, numbers, and symbols increases the possible combinations exponentially.
Length - Each additional character multiplies the total combinations by the charset size.
Pattern Detection - Common patterns, repeated characters, and dictionary words make passwords easier to crack.

# 13

Backup Codes Generator
Generate secure backup codes for two-factor authentication recovery. Store these safely - they're your last resort if you lose access to your 2FA device.

Number of codes
8
10
12
16
Generate New
1.hcnp-3a2o
2.9kqu-yy71
3.7tij-fl25
4.3hx2-wjs7
5.tpa9-fdfy
6.2qsu-ciqc
7.g1bx-kdcf
8.as35-bvza
9.pfhe-ybac
10.qmzt-sxo6
Copy All
Download as Text
How to store backup codes safely

Print them - Store a physical copy in a safe or safety deposit box
Password manager - Store in a separate password manager from the account
Encrypted file - Keep in an encrypted disk image or container
Never store - In email, cloud storage, or anywhere easily accessible
Using backup codes

Each code can typically only be used once
Cross off or delete codes after using them
Generate new codes before you run out
If you think codes are compromised, regenerate immediately

# 14

Recovery Key Generator
Generate secure recovery keys in the style of Apple, Google, and Microsoft. Used as a last resort to regain access to your account.

Format
6 x 4 (Apple style)
8 x 4 (Microsoft style)
5 x 5 (Custom)
Entropy:124 bits
Generate
124 bits

PCCN-GI5M-JO0Z-J1AC-3GLG-TCWK

124 bits

7C1K-FHHB-O3T3-LHIZ-MRJK-2L8O

124 bits

WDPE-SVGC-4CYW-IKXZ-JWGQ-ASZY

124 bits

9CQS-YEL8-T5YG-APGA-JAYB-NLRD

Recovery key security

Write it down - Store a physical copy in a secure location
Don't screenshot - Photos can be synced to cloud services
Tell someone trusted - In case of emergency, someone should know where it is
Test it works - Verify the key before relying on it
Recovery key vs backup codes
Recovery Key
Single long key
Can be used multiple times
Full account recovery
Higher security
Backup Codes
Multiple short codes
One-time use each
2FA bypass only
Easier to manage

# 15

Temporary Password Generator
Generate temporary passwords for one-time use. Easy to read and type, perfect for new user onboarding and password resets.

Length
8
10
12
16

Easy to type (no 0/O, 1/l/I)
Generate
Entropy:
69 bits
EqAuKFvDrDat

KT7kXkgQvgAq

VUnea3k6ZJFY

e7ECj6NANQZE

uy8FvF2uzxny

SfcX4TJkmVU7

Fdrauf2htQUc

v4QMvQSuDcnN

aCxgKjPqwqKP

Pc57JRuhjywA

Important: Temporary passwords should be temporary

Force users to change these passwords on first login
Set a short expiration time (24-72 hours)
Send via secure channel (not plain email if possible)
Never reuse temporary passwords
Log all temporary password usage
Bulk Generation
Generate

10
passwords
Generate

# 16

Gaming Password Generator
Generate secure passwords for your gaming accounts. Optimized for compatibility with Xbox Live, PlayStation Network, Steam, and other platforms.

Length

16
Options

Include symbols (may cause issues on some platforms)
Entropy:
95 bits
Generate
Srcwv05OYzZFeNRB

nvX68IkBwenLvOTR

odbKZwkp10dLxvuN

pjHCbPLm54r05Dbh

Af5wG0EtZgGbDfxf

zdK9LjMwWUKtmIQF

Platform Requirements
Xbox Live
8-16 chars
PlayStation Network
8-30 chars
Steam
8-64 chars
Epic Games
7-64 chars
Nintendo
8-20 chars
Battle.net
8-16 chars
Gaming account security tips

Enable 2FA on all gaming accounts
Use unique passwords for each platform
Never share your password, even with friends
Be wary of phishing links in game chats
Check for official domain names before logging in
Bulk Generation
Generate

10
passwords
Generate

# 17

WiFi Password Generator
Generate strong, secure passwords for your wireless network. Compatible with all router brands including Netgear, Linksys, TP-Link, ASUS, and D-Link.

Popular Router Brands & Admin URLs
Netgear
routerlogin.net
192.168.1.1
Linksys
192.168.1.1
myrouter.local
TP-Link
tplinkwifi.net
192.168.0.1
Password Length

20 characters (recommended)
Generate New Passwords
Entropy:
124 bits
(WPA requires 8-63 printable ASCII characters)
BlHX+@5l+Ae^2K-Q-D^n

fv2\*F0BBukJYgsoegCem

ogSXb5KmyxW=Hqp$kd6m

IK7wAwWsk1Iq_YD5QppY

B4ZGTIDqn&unjwD_a!42

How to Set Your WiFi Password

1. Access Your Router Admin Panel
   Open a browser and go to your router's admin page. Try these common addresses:

   192.168.1.1
   192.168.0.1
   10.0.0.1
   192.168.1.254

2. Login with Admin Credentials
   Use admin credentials (check router label or manual if using defaults)

3. Navigate to WiFi Security Settings
   Look for sections named Wireless, WiFi, Security, or Network settings

Router-Specific Instructions
NETGEAR
Address: 192.168.1.1 or routerlogin.net

Path: Wireless → Security Options

WPA3: Available on newer models (AX series)

Setting: WPA2-PSK [AES] or WPA3-Personal

Linksys
Address: 192.168.1.1 or myrouter.local

Path: WiFi Settings → Security

WPA3: Velop series and newer WiFi 6 routers

Setting: WPA2/WPA3 Mixed or WPA3 Only

ASUS
Address: 192.168.1.1 or router.asus.com

Path: Wireless → General

WPA3: AX series and newer AC routers

Setting: WPA2/WPA3-Personal

TP-Link
Address: 192.168.0.1 or tplinkwifi.net

Path: Wireless → Wireless Security

WPA3: Archer AX series and newer models

Setting: WPA/WPA2/WPA3-Personal

D-Link
Address: 192.168.0.1 or dlinkrouter.local

Path: Setup → Wireless Settings

WPA3: DIR-X series and newer models

Setting: WPA2-PSK/WPA3-SAE

Eero (Amazon)
Setup: Eero app only (no web interface)

Path: Settings → Network → Password

WPA3: All current models support WPA3

Setting: Automatic WPA2/WPA3 selection

📡 ISP-Provided Router Notes
Xfinity/Comcast: Gateway address usually 10.0.0.1

Verizon FiOS: Address typically 192.168.1.1

Spectrum: Varies by model, try 192.168.1.1 first

AT&T: Often 192.168.1.254 or 192.168.1.1

CenturyLink: Usually 192.168.0.1

Cox: Typically 192.168.0.1

WiFi Security Tips

Use WPA3 if your router supports it, otherwise WPA2
Never use WEP - it's broken and easily cracked
Use at least 12 characters (20+ is better)
Change default router admin password too
Consider hiding your network name (SSID) for extra privacy
Create a separate guest network for visitors
Guest Network Best Practices
Why Set Up a Guest Network?
Isolates visitor devices from your main network
Protects your personal files and devices
Easier to share simple credentials
Can set bandwidth limits for guests
Guest Network Setup Tips
Use a memorable but secure password (16+ characters)
Enable client isolation to prevent guest-to-guest communication
Set time limits if your router supports it
Consider simpler names like "YourNameGuest" for easy identification
Regularly change guest password, especially after events
WPA2 vs WPA3: Which Should You Choose?
WPA2 (2004)
✓
Universal device support
✓
AES-256 encryption
⚠
Vulnerable to KRACK attacks (patched)
⚠
Susceptible to dictionary attacks
Password recommendation: Minimum 20 characters with mixed case, numbers, and symbols

WPA3 (2018)
✓
Protected Management Frames
✓
SAE (Simultaneous Authentication)
✓
Stronger against brute force
✗
Limited older device support
Password recommendation: 12+ characters sufficient due to improved security

Standard Security Recommendation
WEP Broken Never use - can be cracked in minutes
WPA Weak Avoid - vulnerable to attacks
WPA2 Good Recommended minimum standard
WPA3 Best Use if supported by all your devices
💡 Migration Strategy
Start with WPA2/WPA3 mixed mode if available. This ensures older devices can connect while newer ones use WPA3. Once all devices support WPA3, switch to WPA3-only for maximum security.

Phase 1: Enable WPA2/WPA3 mixed mode (6-12 months)

Phase 2: Audit device compatibility

Phase 3: Switch to WPA3-only when all devices support it

WPA3 Technical Improvements
Enhanced Security Features
• SAE (Dragonfly): Replaces PSK with forward secrecy
• 192-bit Security: Available in WPA3-Enterprise
• Protected Management Frames: Prevents deauth attacks
• Opportunistic Wireless Encryption: Open network protection
Attack Resistance
• KRACK immunity: Not vulnerable to key reinstallation
• Dictionary attack protection: SAE makes offline attacks impossible
• Brute force resistance: Built-in rate limiting
• Perfect Forward Secrecy: Past traffic stays secure
✅ WPA3 Device Compatibility (2024)
Smartphones

• iPhone: iOS 13+ (2019+)
• Android: 10+ (2019+)
• Samsung: Galaxy S10+ (2019+)
Computers

• Windows: 10 May 2019+
• macOS: 10.15 Catalina+
• Linux: Recent kernels
Other Devices

• Smart TVs: 2020+ models
• Gaming consoles: PS5, Xbox Series
• IoT: Varies widely
Share via QR Code
Most phones can generate a WiFi QR code from Settings > WiFi > Share. Guests can scan it to connect without typing the password.

Bulk Generation
Generate

10
passwords
Generate

# 18

API Token Generator
Generate secure API tokens with customizable prefixes. Perfect for authentication tokens, API credentials, and access management.

Prefix

sk_live (Stripe-style)
Length (after prefix)

32 characters
Generate
Entropy:
190 bits
(alphanumeric, 32 characters)
Generated Values
sk_test_FF5LdRpdEZHowA0odAREVRC9NBDXkgSv

sk_test_0xh6ls9Q3rkVt90mJMMgolq44OuL0KYj

sk_test_6d8vwyu4s3asGrFwiOSC3rNcZgjHtlOp

sk_test_V6braGmri0ZQrIl1EeFLtdChylWZQeEB

sk_test_oRsHRngkdRlHXZXxNBNDdb1NuhjpTy1L

🔐 API Key Permissions Builder
Define granular permissions and access controls for your API keys with preset templates and custom scopes.

Permission Presets

Read Only
Safe for public dashboards
users:read, posts:read, analytics:read

Content Manager
Create and edit content
posts:read, posts:write, media:upload

User Admin
Full user management
users:read, users:write, users:delete

Full Access
All permissions (admin)
_:_
Individual Permissions

users:read

users:write

users:delete

posts:read

posts:write

posts:delete

comments:read

comments:write

comments:moderate

analytics:read

analytics:export

payments:read

payments:process

payments:refund

media:upload

media:delete

webhooks:create

webhooks:delete

admin:settings

admin:audit
Custom Scopes
resource:action (e.g. files:download)
Add Custom Scope
API Configuration
Rate Limiting

1,000 requests/hour (Standard)
API Version

v1 (Stable)
Selected Permissions
No permissions selected
API Key Configuration
json

Copy
{
"api_key": "sk_test_FF5LdRpdEZHowA0odAREVRC9NBDXkgSv",
"permissions": [
"users:read"
],
"rate_limit": "1000/hour",
"api_version": "v1",
"created_at": "2026-07-03T04:27:26.666Z",
"expires_at": "2027-07-03"
}
Implementation Examples
Express.js Permission Middleware
middleware/auth.js

Copy
const apiKeys = new Map([
['sk_test_FF5LdRpdEZHowA0odAREVRC9NBDXkgSv', {
permissions: ['users:read'],
rate_limit: '1000/hour',
api_version: 'v1'
}]
]);

function requirePermission(requiredPermission) {
return (req, res, next) => {
const apiKey = req.headers['authorization']?.replace('Bearer ', '');

    if (!apiKey) {
      return res.status(401).json({ error: 'API key required' });
    }

    const keyData = apiKeys.get(apiKey);
    if (!keyData) {
      return res.status(401).json({ error: 'Invalid API key' });
    }

    // Check permission
    const hasPermission = keyData.permissions.includes('*:*') ||
                         keyData.permissions.includes(requiredPermission);

    if (!hasPermission) {
      return res.status(403).json({
        error: 'Insufficient permissions',
        required: requiredPermission,
        granted: keyData.permissions
      });
    }

    req.apiKey = keyData;
    next();

};
}

// Usage
app.get('/users', requirePermission('users:read'), (req, res) => {
res.json({ users: [] });
});

app.post('/users', requirePermission('users:write'), (req, res) => {
res.json({ message: 'User created' });
});
Python Flask with Scopes
api_auth.py

Copy
from functools import wraps
from flask import request, jsonify

API_KEYS = {
'sk_test_FF5LdRpdEZHowA0odAREVRC9NBDXkgSv': {
'permissions': ['users:read'],
'rate_limit': '1000/hour',
'api_version': 'v1'
}
}

def require_permission(required_permission):
def decorator(f):
@wraps(f)
def decorated_function(\*args, \*\*kwargs):
auth_header = request.headers.get('Authorization', '')

            if not auth_header.startswith('Bearer '):
                return jsonify({'error': 'API key required'}), 401

            api_key = auth_header[7:]  # Remove 'Bearer '
            key_data = API_KEYS.get(api_key)

            if not key_data:
                return jsonify({'error': 'Invalid API key'}), 401

            permissions = key_data['permissions']
            has_permission = ('*:*' in permissions or
                            required_permission in permissions)

            if not has_permission:
                return jsonify({
                    'error': 'Insufficient permissions',
                    'required': required_permission,
                    'granted': permissions
                }), 403

            request.api_key_data = key_data
            return f(*args, **kwargs)
        return decorated_function
    return decorator

# Usage

@app.route('/users')
@require_permission('users:read')
def get_users():
return jsonify({'users': []})

@app.route('/users', methods=['POST'])
@require_permission('users:write')  
def create_user():
return jsonify({'message': 'User created'})
Usage Example
.env

Copy

# Store your API token securely

API_KEY=sk_test_FF5LdRpdEZHowA0odAREVRC9NBDXkgSv
Token prefixes

Prefixes like sk* (secret) and pk* (public) help identify token types at a glance and prevent accidental exposure. The \_live and \_test suffixes distinguish production from development environments.

Bulk Generation
Generate

10
tokens
Generate
Generate in Terminal
For production systems, generate tokens locally:

OpenSSL with prefix

echo "sk*live*$(openssl rand -base64 32 | tr -dc 'a-zA-Z0-9' | head -c 32)"

Python secrets module

python3 -c "import secrets; print(f'sk*live*{secrets.token_urlsafe(24)}')"

Node.js crypto

node -e "console.log('sk*live*' + require('crypto').randomBytes(24).toString('base64url'))"

Related Tools
API Key Generator
Secure API tokens
JWT Secret Generator
Token signing keys
Django Secret Key
For Django settings
UUID Generator
Unique identifiers
Backup Codes
2FA recovery codes
Security Tips

- Use prefixes to identify key types (sk*, pk*)
- Set appropriate expiration on tokens
- Implement rate limiting on API endpoints
- Log and monitor key usage
  Learn More
  API Key Best Practices
  JWT Security Guide

# 19

Generate Production-Ready JWT Secrets in One Click
Create cryptographically secure JWT signing secrets instantly. Get 256-bit, 384-bit, or 512-bit secrets ready for immediate use in your authentication system.

Algorithm

HS256 (256-bit)
Format

Base64
Generate
Security:
256 bits
(32 bytes) — HMAC with SHA-256 (most common)
1psQ0QgfH/wckr+rE37DbQvLHFiF9ZpuvgYLe3wZgRM=

0IgbMiKMTsbopHjjNUyMgkqUtUuSdBv+pFbEQRgYBb4=

BkLHqVS7+vdEM+zAsW/B/pF8+mreMEYeT/saOKiRAVg=

y+TSbfgau51peMqvWp1XBn8Au6EbZpjl+PVMv3gMRus=

🔧 Interactive JWT Decoder & Encoder
Decode existing JWTs to inspect their structure, or build new ones with custom claims.

JWT Decoder
JWT Token (paste here)
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyNDI2MjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
Header
{
"alg": "HS256",
"typ": "JWT"
}
Payload
{
"sub": "1234567890",
"name": "John Doe",
"iat": 1516239022,
"exp": 1516242622
}
Signature (truncated)
SflKxwRJSMeKKF2QT4fw...
JWT Builder
Header (JSON)
{
"alg": "HS256",
"typ": "JWT"
}
Payload (JSON)
{
"sub": "1234567890",
"name": "John Doe",
"iat": 1783052855,
"exp": 1783056455
}
Build JWT (Header + Payload)
📊 JWT Algorithm Comparison
Algorithm Type Key Length Security Performance Use Cases
HS256 HMAC-SHA256 256 bits (32 bytes) Good Fastest Most common, good for web apps
HS384 HMAC-SHA384 384 bits (48 bytes) Better Medium Higher security requirements
HS512 HMAC-SHA512 512 bits (64 bytes) Best Slower Maximum security, critical systems
RS256 RSA-SHA256 2048+ bits High Slow Public key verification
ES256 ECDSA-SHA256 256 bits High Fast Modern alternative to RSA
💡 Current selection: HS256 offers hmac with sha-256 (most common) with 256 bits of security. Perfect for most web applications.

🧩 JWT Claims Builder
Build standard JWT claims with validation and examples.

Standard Claims
Issuer (iss)
your-app.com
Subject (sub)
user-123
Audience (aud)
api.example.com
Expiry (hours)
24
Scopes (space-separated)
read:profile write:posts admin
Custom Claims
Claim name
Value
Add
Generated Claims Preview
{
"iss": "your-app.com",
"sub": "user-123",
"aud": "api.example.com",
"iat": 1783052855,
"exp": 1783139255,
"scope": "read:profile write:posts",
"role": "user",
"email": "user@example.com"
}
Copy Claims JSON
Usage Examples
.env

Copy
JWT_SECRET=1psQ0QgfH/wckr+rE37DbQvLHFiF9ZpuvgYLe3wZgRM=
Node.js (jsonwebtoken)

Copy
const jwt = require('jsonwebtoken');

const token = jwt.sign(
{ userId: '123', role: 'admin' },
process.env.JWT_SECRET,
{ algorithm: 'HS256', expiresIn: '24h' }
);
JWT Secret Security Best Practices
Secret Length Requirements
Secret length matters

For HMAC-based JWT algorithms, the secret should be at least as long as the hash output:

HS256 requires at least 256 bits (32 bytes)
HS384 requires at least 384 bits (48 bytes)
HS512 requires at least 512 bits (64 bytes)
Using a shorter secret weakens the security of your tokens and makes them vulnerable to brute force attacks.

Secure Secret Storage
Environment Variables: Store secrets in environment variables, never in source code
Secret Management: Use dedicated services like AWS Secrets Manager, Azure Key Vault, or HashiCorp Vault
File Permissions: If storing in files, use strict permissions (600 or 640)
Version Control: Never commit secrets to Git repositories
Container Security: Use Docker secrets or Kubernetes secrets in containerized environments
Secret Rotation Strategy
✓ Do
Rotate secrets regularly (every 90 days minimum)
Support multiple active secrets during rotation
Use automated rotation tools when possible
Log secret usage for audit trails
Test rotation procedures regularly
✗ Don't
Wait for security incidents to rotate
Use the same secret across environments
Forget to update all services simultaneously
Leave old secrets active indefinitely
Skip testing after rotation
Choosing the Right Algorithm
Algorithm Security Level Performance Recommendation
HS256 Good Fast Default choice for most applications
HS384 Better Medium Use for higher security requirements
HS512 Best Slower Maximum security, slight performance cost
Production Deployment Checklist

Generate unique secrets for each environment (dev, staging, prod)

Implement proper secret storage (environment variables or secret manager)

Set up monitoring for failed JWT validation attempts

Configure appropriate token expiration times

Test secret rotation procedure

Audit code for hardcoded secrets
Complete Implementation Examples
Express.js Middleware with Security
middleware/auth.js

Copy
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');

// Rate limiting for token endpoints
const authLimiter = rateLimit({
windowMs: 15 _ 60 _ 1000, // 15 minutes
max: 5,
message: 'Too many authentication attempts'
});

class JWTService {
constructor() {
this.secret = process.env.JWT_SECRET;
this.algorithm = 'HS256';

    if (!this.secret) {
      throw new Error('JWT_SECRET environment variable is required');
    }

}

generateToken(payload) {
return jwt.sign({
...payload,
iat: Math.floor(Date.now() / 1000),
jti: require('crypto').randomBytes(16).toString('hex')
}, this.secret, {
algorithm: this.algorithm,
expiresIn: '24h',
issuer: 'your-app',
audience: 'your-users'
});
}

verifyToken(token) {
try {
return jwt.verify(token, this.secret, {
algorithms: [this.algorithm],
issuer: 'your-app',
audience: 'your-users'
});
} catch (error) {
throw new Error('Invalid token: ' + error.message);
}
}
}

// Authentication middleware
const authenticateToken = (req, res, next) => {
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1];

if (!token) {
return res.status(401).json({ error: 'Access token required' });
}

try {
const jwtService = new JWTService();
req.user = jwtService.verifyToken(token);
next();
} catch (error) {
return res.status(403).json({ error: 'Invalid token' });
}
};

module.exports = { authenticateToken, authLimiter };
Python Flask with Error Handling
jwt_auth.py

Copy
import jwt
import os
from datetime import datetime, timedelta, timezone
from functools import wraps
from flask import request, jsonify

class JWTAuth:
def **init**(self):
self.secret = os.getenv('JWT_SECRET')
self.algorithm = 'HS256'

        if not self.secret:
            raise ValueError('JWT_SECRET environment variable required')

    def generate_token(self, user_data):
        payload = {
            'user_id': user_data['id'],
            'email': user_data['email'],
            'role': user_data.get('role', 'user'),
            'exp': datetime.now(timezone.utc) + timedelta(hours=24),
            'iat': datetime.now(timezone.utc),
            'iss': 'your-app',
            'aud': 'your-users'
        }
        return jwt.encode(payload, self.secret, algorithm=self.algorithm)

    def verify_token(self, token):
        try:
            return jwt.decode(
                token, self.secret,
                algorithms=[self.algorithm],
                options={"verify_aud": True, "verify_iss": True}
            )
        except jwt.ExpiredSignatureError:
            raise ValueError('Token has expired')
        except jwt.InvalidTokenError:
            raise ValueError('Invalid token')

# Decorator for protected routes

def token_required(f):
@wraps(f)
def decorated(\*args, \*\*kwargs):
auth_header = request.headers.get('Authorization')

        if not auth_header:
            return jsonify({'error': 'Token missing'}), 401

        try:
            token = auth_header.split(' ')[1]
            jwt_auth = JWTAuth()
            payload = jwt_auth.verify_token(token)
            request.current_user = payload
        except (IndexError, ValueError) as e:
            return jsonify({'error': str(e)}), 401

        return f(*args, **kwargs)
    return decorated

JWT Security Audit Checklist
🔐 Secret & Configuration

Secret meets minimum length ($32+ bytes for $HS256)

Algorithm explicitly specified in verification

Issuer (iss) and audience (aud) claims validated

Appropriate expiration times set (15min-1hr)

Secret stored securely (env vars, not code)
🛡️ Implementation Security

HTTPS enforced in production

Rate limiting on auth endpoints

Proper error handling (no info leakage)

Token blacklist/revocation mechanism

Minimal payload data (no sensitive info)
🔍 Quick Security Test
Test your JWT implementation:

• Try using 'none' algorithm → should be rejected
• Send expired token → should return 401
• Modify token signature → should be invalid
• Test with wrong audience/issuer → should be rejected
Bulk Generation
Generate

10
secrets
Generate
Implementation Examples
Node.js with Express.js
auth-middleware.js

Copy
const jwt = require('jsonwebtoken');

// Generate token (login)
function generateToken(user) {
const payload = {
userId: user.id,
email: user.email,
role: user.role
};

return jwt.sign(payload, process.env.JWT_SECRET, {
algorithm: 'HS256',
expiresIn: '24h',
issuer: 'your-app-name',
audience: 'your-app-users'
});
}

// Verify token (middleware)
function verifyToken(req, res, next) {
const token = req.headers.authorization?.split(' ')[1];

if (!token) {
return res.status(401).json({ error: 'Access token required' });
}

try {
const decoded = jwt.verify(token, process.env.JWT_SECRET, {
algorithms: ['HS256']
});
req.user = decoded;
next();
} catch (error) {
return res.status(401).json({ error: 'Invalid token' });
}
}
Python with Flask
jwt_utils.py

Copy
import jwt
import os
from datetime import datetime, timedelta
from functools import wraps
from flask import request, jsonify

JWT_SECRET = os.getenv('JWT_SECRET')
JWT_ALGORITHM = 'HS256'

def generate_token(user_data):
payload = {
'user_id': user_data['id'],
'email': user_data['email'],
'exp': datetime.utcnow() + timedelta(hours=24),
'iat': datetime.utcnow(),
'iss': 'your-app-name'
}

    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

def verify_token(f):
@wraps(f)
def decorated(\*args, \*\*kwargs):
token = request.headers.get('Authorization')

        if not token:
            return jsonify({'error': 'Token missing'}), 401

        try:
            token = token.split(' ')[1]  # Remove 'Bearer '
            decoded = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
            request.user = decoded
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401

        return f(*args, **kwargs)
    return decorated

Java with Spring Boot
JwtUtil.java

Copy
import io.jsonwebtoken.\*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String jwtSecret;

    private final int jwtExpirationMs = 86400000; // 24 hours

    public String generateToken(String username, String role) {
        return Jwts.builder()
                .setSubject(username)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .signWith(Keys.hmacShaKeyFor(jwtSecret.getBytes()), SignatureAlgorithm.HS256)
                .compact();
    }

    public Claims extractClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor(jwtSecret.getBytes()))
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }

    public boolean validateToken(String token) {
        try {
            extractClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

}
🔐 Implementation Security Tips
Always validate the algorithm to prevent algorithm confusion attacks
Set appropriate expiration times - shorter is more secure but less convenient
Include audience and issuer claims for additional validation
Use HTTPS only in production to prevent token interception
Implement proper error handling without exposing sensitive information
Consider implementing token blacklisting for logout functionality
Generate in Terminal
For production systems, generate secrets locally:

OpenSSL (256-bit, base64)

openssl rand -base64 32

OpenSSL (256-bit, hex)

openssl rand -hex 32

Python secrets module

python3 -c "import secrets; print(secrets.token_urlsafe(32))"

Node.js crypto

node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# 20

UUID Generator
Generate RFC 4122 compliant UUIDs (Universally Unique Identifiers). Version 4 UUIDs are randomly generated and have 122 bits of entropy.

Format

Standard (lowercase with dashes)
Version:
v4
Entropy:
122 bits
Generate
Generated Values
0d396dee-58de-4c94-a723-d7e30bb054f9

ab27474e-2760-48ae-ade1-e8d91c2f917d

2aa26276-3173-4dbc-94a5-727cec3fcfa2

471a3d5b-d1e9-484e-81d9-1bda8ea93ead

36a17204-2fe0-4a68-b197-2f31be15c682

d58e9297-616c-4d15-88c4-9290724b1f46

Usage Examples
SQL (Primary Key)

Copy
CREATE TABLE users (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
email VARCHAR(255) NOT NULL
);

INSERT INTO users (id, email) VALUES
('0d396dee-58de-4c94-a723-d7e30bb054f9', 'user@example.com');
JavaScript

Copy
// Native (Node.js 14.17+ / modern browsers)
const uuid = crypto.randomUUID();

// With uuid package
import { v4 as uuidv4 } from 'uuid';
const id = uuidv4();
UUID v4 structure

xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx

The 4 indicates version 4 (random)
The y is one of 8, 9, a, or b (variant 1)
All other characters are random hex digits
Total: 32 hex characters = 128 bits (122 random + 6 version/variant)
Bulk Generation
Generate

10
UUIDs
Generate
Generate in Terminal
macOS / Linux

uuidgen

Linux (kernel)

cat /proc/sys/kernel/random/uuid

Python

python3 -c "import uuid; print(uuid.uuid4())"

Node.js

node -e "console.log(require('crypto').randomUUID())"

# 21

Random String Generator
Generate cryptographically secure random strings with customizable length and character sets. Perfect for tokens, identifiers, temporary passwords, and testing.

Length

32 characters
Character Set

Alphanumeric (a-z, A-Z, 0-9)
Generate
Entropy:
190 bits
(62 unique characters, 32 length)
ElXLLA69m7ZUMuDnNub8J2JrXgMDotFL

WR436NsdV6pjdBLYtR5wdtYM93HhDRe0

bYiTRUdm5nFPtUhclUmYZn97i43zRAyG

OQAOBaQEETC1zWMWfq1U70kpbeq81TKl

E6mzp5eGOaRyqZFCmQKAuRQnlVuxjfPd

Common Use Cases
Session IDs
32+ character alphanumeric strings for secure session identification.

Database IDs
URL-safe random strings as alternatives to auto-increment IDs.

Temporary Tokens
One-time verification codes, password reset tokens, email confirmations.

Test Data
Random strings for testing, mock data generation, and development.

Cryptographically Secure

These strings are generated using the Web Crypto API's crypto.getRandomValues(), which provides cryptographically secure random values suitable for security-sensitive applications.

Bulk Generation
Generate

10
strings
Generate
Generate in Terminal
Generate random strings locally using these commands:

OpenSSL alphanumeric

openssl rand -base64 32 | tr -dc 'a-zA-Z0-9' | head -c 32

OpenSSL hex

openssl rand -hex 16 | head -c 32

Python URL-safe

python3 -c "import secrets; print(secrets.token_urlsafe(24))"

Node.js

node -e "console.log(require('crypto').randomBytes(16).toString('hex').slice(0, 32))"

# 22

TOTP Secret Key Generator
Generate Base32-encoded secrets for Time-based One-Time Password (TOTP) authentication. Compatible with Google Authenticator, Authy, Microsoft Authenticator, and other 2FA apps.

Secret Size

160 bits (20 bytes) - Recommended
Generate
Entropy:
160 bits
Format:
Base32 (RFC 4648)
V7AT7KM6JOGQ32QWDG3YBYGENSX3VTOW

O7T6K64ST3ISWHJPYLFSVAKKPBUPIY2X

RUQJWQXZLVQ2DKO65QD7XMW3244NDQJ6

BXB2GYM5ZAEZU2O7L2ZISFVVZ2FVMCQF

4SGZRCVYAENJMEZBSE2OPZZQ6OGAQLIE

OTPAuth URI (for QR Codes)
Issuer (App Name)
MyApp
Account
user@example.com
Generated URI
otpauth://totp/MyApp:user%40example.com?secret=V7AT7KM6JOGQ32QWDG3YBYGENSX3VTOW&issuer=MyApp&algorithm=SHA1&digits=6&period=30
Use this URI to generate a QR code that users can scan with their authenticator app.

Implementation Examples
Python (pyotp)

Copy
import pyotp

# Store this secret securely for each user

secret = "V7AT7KM6JOGQ32QWDG3YBYGENSX3VTOW"

# Generate current TOTP code

totp = pyotp.TOTP(secret)
print(totp.now()) # e.g., "492039"

# Verify a code from user

is_valid = totp.verify("492039")
Node.js (otplib)

Copy
const { authenticator } = require('otplib');

const secret = "V7AT7KM6JOGQ32QWDG3YBYGENSX3VTOW";

// Generate current code
const token = authenticator.generate(secret);

// Verify user's code
const isValid = authenticator.verify({ token: userCode, secret });
PHP (sonata-project/GoogleAuthenticator)

Copy
use Sonata\GoogleAuthenticator\GoogleAuthenticator;

$ga = new GoogleAuthenticator();
$secret = "V7AT7KM6JOGQ32QWDG3YBYGENSX3VTOW";

// Verify user's code
$isValid = $ga->checkCode($secret, $userCode);
How TOTP Works

TOTP generates a 6-digit code that changes every 30 seconds. Both the server and the user's authenticator app share the same secret key, allowing them to generate matching codes without network communication.

Based on HMAC-SHA1 algorithm (RFC 6238)
Uses Unix timestamp divided by 30-second intervals
Base32 encoding makes secrets easy to type manually
Security Considerations

Store secrets encrypted in your database
Show the secret/QR code only once during setup
Provide backup codes for account recovery
Use 160+ bits (20+ bytes) for production systems
Bulk Generation
Generate

10
secrets
Generate
Generate in Terminal
Python

python3 -c "import base64, secrets; print(base64.b32encode(secrets.token_bytes(20)).decode())"

OpenSSL + base32

openssl rand -hex 20 | xxd -r -p | base32

Node.js (URL-safe variant)

node -e "console.log(require('crypto').randomBytes(20).toString('base64').replace(/[+/=]/g, c => ({'+':'-','/':'\_','=':''}[c])))"

# 23

Test Credit Card Generator
Generate valid test credit card numbers for development and testing purposes. These cards pass Luhn validation but are not real and cannot be used for purchases.

For Testing Only

These are fake test card numbers for software development and testing. They are not connected to real accounts and cannot be used for actual purchases. Using fake card numbers for fraud is illegal.

Card Type

Visa
Generate
Visa
Click to copy number
4369 7845 7523 8858
Expires: 06/27
CVV: 572
Visa
Click to copy number
4204 8652 3076 8899
Expires: 08/29
CVV: 580
Visa
Click to copy number
4643 0491 8011 9820
Expires: 10/27
CVV: 862
Visa
Click to copy number
4639 2980 0641 2382
Expires: 10/30
CVV: 403
Visa
Click to copy number
4102 5934 9325 2681
Expires: 03/29
CVV: 042
Official Test Card Numbers
Payment processors provide official test cards. Use these for integration testing:

Stripe Test Cards

Copy
Visa (success): 4242 4242 4242 4242
Visa (decline): 4000 0000 0000 0002
Mastercard: 5555 5555 5555 4444
Amex: 3782 822463 10005
3D Secure: 4000 0025 0000 3155

Use any future expiry and any 3-digit CVV
PayPal Sandbox

Copy
Visa: 4032 0350 0109 5217
Mastercard: 5425 2334 3010 9903
Amex: 3434 343434 34343

Expiry: Any future date, CVV: Any 3-4 digits
How Card Validation Works
Credit card numbers use the Luhn algorithm (mod 10) for basic validation. The last digit is a check digit that makes the number pass the algorithm.

Starting from the right, double every second digit
If doubling results in a number > 9, subtract 9
Sum all the digits
If the sum is divisible by 10, the number is valid
Note: Luhn only catches typos - it doesn't verify if a card actually exists.

Card Number Formats
Card Type Prefix(es) Length CVV
Visa 4 16 digits 3 digits
Mastercard 51-55 16 digits 3 digits
American Express 34, 37 15 digits 4 digits
Discover 6011, 65 16 digits 3 digits

# 24

Django SECRET_KEY Generator
Generate secure SECRET_KEY values for Django projects. Uses the same character set and length as Django's default key generation.

282 bits

+\_at#im!u7!x---pqiya!n=(vlc)25=7sdo1-6vif9_7(58r@=

282 bits

ni3o\_#a75wkb4ouh!9(&+5ar1&8i8$4zo)6fr0cwp3+ofg%bow

282 bits

jyf@tkc)jwp^fi\*me=q+t#q)ps!#nnz98kp16vk&#&bqd9sb&\_

282 bits

%gg!&4auuo73negwon&j+d8*wk6e(betphvwbsb#c)8foxn6*#

Generate New
How to Use in Django
Basic settings.py
myproject/settings.py

Copy

# SECURITY WARNING: keep the secret key used in production secret!

SECRET_KEY = '+\_at#im!u7!x---pqiya!n=(vlc)25=7sdo1-6vif9_7(58r@='

# Other settings...

DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com']
Environment Variables (Recommended)
.env

Copy
DJANGO_SECRET_KEY=+\_at#im!u7!x---pqiya!n=(vlc)25=7sdo1-6vif9_7(58r@=
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
myproject/settings.py

Copy
import os
from django.core.exceptions import ImproperlyConfigured

def get_env_variable(var_name):
"""Get the environment variable or return exception."""
try:
return os.environ[var_name]
except KeyError:
error_msg = f"Set the {var_name} environment variable"
raise ImproperlyConfigured(error_msg)

SECRET_KEY = get_env_variable('DJANGO_SECRET_KEY')
DEBUG = get_env_variable('DJANGO_DEBUG') == 'True'
ALLOWED_HOSTS = get_env_variable('DJANGO_ALLOWED_HOSTS').split(',')
Docker Compose
docker-compose.yml

Copy
version: '3.8'
services:
web:
build: .
environment: - DJANGO_SECRET_KEY=+\_at#im!u7!x---pqiya!n=(vlc)25=7sdo1-6vif9_7(58r@= - DJANGO_DEBUG=False
ports: - "8000:8000"
Using python-decouple
requirements.txt

Copy
python-decouple==3.8
myproject/settings.py

Copy
from decouple import config

SECRET_KEY = config('SECRET_KEY')
DEBUG = config('DEBUG', default=False, cast=bool)
Django Version Compatibility
Our SECRET_KEY format is compatible with all Django versions:

Django 4.x+ (Current LTS)
Full compatibility with new security features
Works with new CSRF and session implementations
Compatible with async views and middleware
Django 3.x (LTS)
Fully compatible with all 3.x features
Same character set as django-admin startproject
Works with all cryptographic signing
Django 2.x
Compatible with legacy 2.x installations
Supports all session and CSRF functionality
Works with older Python versions (3.6+)
Django 1.x
Works with Django 1.8+ (older LTS versions)
Compatible with legacy project structures
Note: Consider upgrading to supported versions
Migration Tip
When upgrading Django versions, you typically don't need to regenerate your SECRET_KEY. The same key will work across versions, maintaining session continuity for users.

Never commit secrets

Store your SECRET_KEY in environment variables or a secrets manager. Never commit it to version control. Consider using packages likepython-decouple or django-environ.

What SECRET_KEY is used for

Cryptographic signing (sessions, cookies, password reset tokens)
CSRF protection tokens
Unique salts for password hashing
Any use of Django's signing framework
Changing SECRET_KEY will invalidate all existing sessions and signed data.

Bulk Generation
Generate

10
secrets
Generate
Generate in Terminal
For production, generate the key on your server:

Django's built-in generator

python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"

Python secrets module

python3 -c "import secrets; import string; chars = string.ascii*lowercase + string.digits + '!@#$%^&\*(-*=+)'; print(''.join(secrets.choice(chars) for \_ in range(50)))"

OpenSSL

openssl rand -base64 50 | tr -dc 'a-zA-Z0-9!@#$%^&\*(-\_=+)' | head -c 50

# 25

Laravel APP_KEY Generator
Generate secure application encryption keys for Laravel projects. These keys are used for encrypting cookies, sessions, and other sensitive data.

Format:
base64:<32 bytes>
Key Size:
256 bits
Cipher:
AES-256-CBC
Generate
base64:Wgn6DExRtNLHapYVNk5Q84SVFuQwvdBqsFExZBP4GdY=

base64:KSBXGZ4UtrSo67gEb5EqAaLBCKszqOFMxsOX6oNukbw=

base64:W+5qTNzPX6Mw78I++5pj4YKwYB3TMDqBn3gVe3DsDzk=

base64:NuGaV1Wea9WTJXHjVieOP1xjLyVPezsoc16qzzcuOz8=

base64:YVJcI3V+zYnt3WtXIPnyVDY0RL6kTSDbKEUGFYsh/NM=

Add to .env File
.env

Copy
APP_KEY=base64:Wgn6DExRtNLHapYVNk5Q84SVFuQwvdBqsFExZBP4GdY=
Installation

1. Copy the key
   Click on any generated key above to copy it to your clipboard.

2. Update your .env file
   Paste the key as the value of APP_KEY in your Laravel project's .env file.

3. Clear config cache (if needed)
   terminal

Copy
php artisan config:clear
Production Warning

Changing APP_KEY in production will invalidate all encrypted data, including user sessions, cookies, and any data encrypted with the old key. Only change it during initial setup or if you suspect the key has been compromised.

Why Laravel Needs APP_KEY
Encrypts session data to prevent tampering
Secures cookies containing sensitive information
Used by Laravel's encryption facade for encrypt() and decrypt()
Protects CSRF tokens and other security features
Required for signed URLs and password reset tokens
Bulk Generation
Generate

10
keys
Generate
Generate Locally
The recommended way is to use Laravel's built-in command:

Laravel Artisan (preferred)

php artisan key:generate

OpenSSL

echo "base64:$(openssl rand -base64 32)"

PHP CLI

php -r "echo 'base64:' . base64_encode(random_bytes(32)) . PHP_EOL;"

# 26

Flask Secret Key Generator
Generate secure SECRET_KEY values for Flask applications. Essential for session security, CSRF protection, and cookie signing.

Format

Hexadecimal string
Key Size (bytes)

24 bytes (192 bits)
Generate
Entropy:
192 bits
fa351871de9797f2cb1896be1be1b82a48205116eabc3061

508415bfb60b1276a677beb22222d0b8a8e2d666e2deb801

f976e638cda7adca86d79319cbfe4f92cdc97abedad9e02f

9a6c1c2f1ced545ca632e18e20661cee9c1c66f26193942c

79c9c90e1706fc430f94ee62fb6aab9b904bce208040285b

Usage in Flask
config.py

Copy
import os

class Config:
SECRET_KEY = os.environ.get('SECRET_KEY') or 'fa351871de9797f2cb1896be1be1b82a48205116eabc3061'
.env

Copy
SECRET_KEY=fa351871de9797f2cb1896be1be1b82a48205116eabc3061
app.py

Copy
from flask import Flask
from dotenv import load_dotenv

load_dotenv()
app = Flask(**name**)
app.config.from_object('config.Config')
Security Best Practices

Never commit SECRET_KEY to version control
Use environment variables in production
Use at least 24 bytes (192 bits) for security
Changing the key invalidates all existing sessions
What SECRET_KEY Protects
Session Data
Flask sessions are cryptographically signed using SECRET_KEY to prevent tampering.

CSRF Tokens
Flask-WTF uses SECRET_KEY to generate and validate CSRF protection tokens.

Cookies
Secure cookies are signed to ensure they haven't been modified by clients.

Flask-Login
Remember-me tokens and session authentication rely on SECRET_KEY.

Bulk Generation
Generate

10
keys
Generate
Generate in Terminal
Generate Flask secret keys locally using Python:

Python secrets (recommended)

python3 -c "import secrets; print(secrets.token_hex(24))"

Python os.urandom

python3 -c "import os; print(os.urandom(24).hex())"

OpenSSL

openssl rand -hex 24

# 27

WordPress Security Keys & Salts
Generate secure authentication keys and salts for your WordPress wp-config.php file. These enhance the security of cookies and user sessions.

Regenerate All
Copy All
wp-config.php

Copy
define('AUTH*KEY', 'ieJFNv5:x%(<nneUM2vyFm=bq?<3gtjTHN,\*@K^R519|GZqw# QG4sQ,P%{gWKvP');
define('SECURE_AUTH_KEY', '\_T!Dw!xYfQVfheYoc Q)m(<PNR8.9#V-^pUs{lE>A@R9ah_yKhf<D0^fd+R]Y}O2');
define('LOGGED_IN_KEY', 'YZ m(uA{m+tQu4(J%1[*@S| )^2Xx0SP}hB8rU(Z#&s2D*CgXil<w(?EaF2@eJzO');
define('NONCE_KEY', '()*vxkxgIYZv;d18Z`qUmiOEnLd;r$posHG.p8_aGanQbfF,(eXahig}hl EPJ^#');
define('AUTH_SALT', '.oACql4e4CX@d7UtUG9F_J+pQ&Y93EEk=MGjnb(T&PXr6/6S(aHtwl.ck#_tjG/5');
define('SECURE_AUTH_SALT', 'bt*r2<u6l{I(fn7H/rDDbVprhOmI7HxwC mQArn_]wmQmsEk%oa}!DIM.3cCxK4 ');
define('LOGGED_IN_SALT', 'm>VqZg2W6):,(S?I,E)l{M9Nn@UGK{>:yIyncc8}h|~Z!MOFn:dkiP2`Vy0?UcQu');
define('NONCE_SALT', 'B#%<)$3HdnnIVY^bej.jRDn4l7P>Y#Ea4~\*W0:.,}YjPY}%bHTuoZI?mbBb=nt9b');
What these keys do

AUTH_KEY/SALT: Encrypts admin cookies
SECURE_AUTH_KEY/SALT: Encrypts SSL admin cookies
LOGGED_IN_KEY/SALT: Encrypts non-SSL logged-in cookies
NONCE_KEY/SALT: Protects nonces against CSRF attacks
When to regenerate

Regenerate these keys if you suspect your site has been compromised. This will invalidate all existing logged-in sessions, forcing all users (including yourself) to log in again.

Official WordPress Salt Generator
WordPress also provides an official API for generating salts:

Fetch from WordPress.org API

curl https://api.wordpress.org/secret-key/1.1/salt/

Installation
Copy the generated keys and paste them into your wp-config.php file, replacing any existing salt definitions:

wp-config.php

Copy

<?php
/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * https://api.wordpress.org/secret-key/1.1/salt/
 */
define('AUTH_KEY', 'ieJFNv5:x%(<nneUM2vyFm=bq?<3gtjTHN,*@K^R519|GZqw# QG4sQ,P%{gWKvP');
define('SECURE_AUTH_KEY', '_T!Dw!xYfQVfheYoc Q)m(<PNR8.9#V-^pUs{lE>A@R9ah_yKhf<D0^fd+R]Y}O2');
define('LOGGED_IN_KEY', 'YZ m(uA{m+tQu4(J%1[_@S| )^2Xx0SP}hB8rU(Z#&s2D*CgXil<w(?EaF2@eJzO');
define('NONCE_KEY', '()*vxkxgIYZv;d18Z`qUmiOEnLd;r$posHG.p8_aGanQbfF,(eXahig}hl EPJ^#');
define('AUTH_SALT', '.oACql4e4CX@d7UtUG9F_J+pQ&Y93EEk=MGjnb(T&PXr6/6S(aHtwl.ck#_tjG/5');
define('SECURE_AUTH_SALT', 'bt*r2<u6l{I(fn7H/rDDbVprhOmI7HxwC mQArn_]wmQmsEk%oa}!DIM.3cCxK4 ');
define('LOGGED_IN_SALT', 'm>VqZg2W6):,(S?I,E)l{M9Nn@UGK{>:yIyncc8}h|~Z!MOFn:dkiP2`Vy0?UcQu');
define('NONCE_SALT', 'B#%<)$3HdnnIVY^bej.jRDn4l7P>Y#Ea4~*W0:.,}YjPY}%bHTuoZI?mbBb=nt9b');

/* That's all, stop editing! */


# 28
Encryption Key Generator
Generate cryptographically secure keys for AES encryption. Includes initialization vectors (IVs) for CBC and GCM modes.

Key Size

256-bit (32 bytes)
Format

Hexadecimal

Include IV
Generate
Security:
256 bits
(32 bytes) — AES-256 (strongest, recommended)
AES-256 Key
256 bits

9e04053a55a05ce79b70e6e8c1e866b992eaf93fe35c761b0c16b954435f7824

Initialization Vector (IV)
128 bits
128-bit (16 bytes)
c53c26db0707f96dc8ce0a78060d4584

AES-256 Key
256 bits

d0ae66997351dffc4c1758de15d9f25c7f20e81e150b0e80dc1311e0b2555731

Initialization Vector (IV)
128 bits
128-bit (16 bytes)
faa906e11c27e9c3c262e60f61363242

AES-256 Key
256 bits

ac61bcd9120cad9b849de3b9a1ba712d047870687e979fb90d54ba7beddeb562

Initialization Vector (IV)
128 bits
128-bit (16 bytes)
3155cc55b13369ff5ca2fc1121febcb9

AES-256 Key
256 bits

0842ef12f442ec1aae1ab52f77d9b72fc7b1a43d1b9c8595f48580ab1d3d679a

Initialization Vector (IV)
128 bits
128-bit (16 bytes)
96709dacad140bc3034e8601e2d3f328

Usage Example
Node.js (crypto)

Copy
const crypto = require('crypto');

const key = Buffer.from('9e04053a55a05ce79b70e6e8c1e866b992eaf93fe35c761b0c16b954435f7824', 'hex');
const iv = Buffer.from('c53c26db0707f96dc8ce0a78060d4584', 'hex');

// Encrypt
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
let encrypted = cipher.update('Hello, World!', 'utf8', 'hex');
encrypted += cipher.final('hex');
const authTag = cipher.getAuthTag();

// Decrypt
const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
decipher.setAuthTag(authTag);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
Understanding AES Encryption
AES Key Sizes Explained
AES-128
Key: 128 bits (16 bytes)
Rounds: 10
Security: ~2^126 operations to break
Use case: Fast, sufficient for most applications
AES-192
Key: 192 bits (24 bytes)
Rounds: 12
Security: ~2^190 operations to break
Use case: Intermediate security/performance
AES-256
Key: 256 bits (32 bytes)
Rounds: 14
Security: ~2^254 operations to break
Use case: Maximum security, government/financial
256-bit hex keys provide maximum security with 2^256 possible combinations. Even with quantum computers, AES-256 remains secure when properly implemented.

AES Encryption Modes
GCM (Galois/Counter Mode)
✓ Authenticated encryption (integrity + confidentiality)
✓ Parallel processing possible
✓ No padding required
✓ Industry standard for modern applications
IV size: 96 bits (12 bytes) recommended

CBC (Cipher Block Chaining)
✓ Widely supported and understood
⚠ Requires separate MAC for authentication
⚠ Sequential processing only
⚠ Padding oracle vulnerabilities possible
IV size: 128 bits (16 bytes) required

Format Comparison: Hex vs Base64
Format	Character Set	Size Efficiency	Best For
Hexadecimal	0-9, A-F (16 chars)	2:1 expansion	URLs, databases, human-readable
Base64	A-Z, a-z, 0-9, +, / (64 chars)	4:3 expansion	JSON, XML, compact transmission
Cryptographic Strength Analysis
Time to break AES with current technology:

AES-128: ~2.9 × 10^32 years (longer than universe age)
AES-256: ~3.3 × 10^56 years (incomprehensibly long)
Quantum resistance: AES-256 provides ~128-bit post-quantum security
Real-world Applications
File Encryption
• Disk encryption (BitLocker, FileVault)
• Encrypted backups
• Document protection
• Archive encryption
Network Security
• TLS/SSL connections
• VPN tunnels
• Database encryption
• Message encryption
For demonstration only

For production encryption, generate keys on your local machine or server using the terminal commands below. Never transmit encryption keys over the network.

IV and key management best practices

Key storage: Use hardware security modules (HSMs) or key management services
Key rotation: Rotate encryption keys regularly (every 90 days minimum)
IV uniqueness: Never reuse an IV with the same key - this breaks semantic security
IV generation: Use cryptographically secure random number generators
Key derivation: Use PBKDF2, scrypt, or Argon2 when deriving keys from passwords
Bulk Generation
Generate

10
keys
Generate
Generate in Terminal
For production systems, always generate encryption keys locally:

AES-256 key (hex)

openssl rand -hex 32

AES-256 key (base64)

openssl rand -base64 32

Initialization vector (IV)

openssl rand -hex 16

Python secrets module

python3 -c "import secrets; print(secrets.token_hex(32))"

Linux /dev/urandom

head -c 32 /dev/urandom | xxd -p -c 64

Related Tools
AES Key Generator
128/192/256 bit keys
RSA Key Generator
Asymmetric key pairs
HMAC Generator
Message authentication
Hash Generator
SHA256, SHA512, MD5
Encryption Keys
Hex keys for encryption
Security Tips
*
Use AES-256 for symmetric encryption
*
Never store encryption keys in code
*
Rotate keys periodically
*
Use environment variables for secrets
Learn More
Encryption Explained: AES vs RSA
Storing Secrets Securely


# 29
AES Encryption Keys
Generate keys for AES (Advanced Encryption Standard) symmetric encryption. Includes initialization vectors for CBC and GCM modes.

Key Size

AES-256 (32 bytes)
Generate
AES-256 Key
256 bits
hex

15c2ccf5ecabb6e90811d2cf496e781caf6cca9c2c343caa042d1863ea990c3a

IV (Initialization Vector)
128 bits
hex, 16 bytes
0620eff0529ba35f97523b5414e5c26f

AES-256 Key
256 bits
hex

f619798abc6dc67393ba7da91fd5926a4bc2cefc93b6926ed3c82abfde7c48ab

IV (Initialization Vector)
128 bits
hex, 16 bytes
2c6237b5cf40ab3b33d6c6772274fd09

AES-256 Key
256 bits
hex

4e704cf290e005bd6ce6832b9dc13a383bfe9c6686524bdd0aa81a964f10d27e

IV (Initialization Vector)
128 bits
hex, 16 bytes
7b6bc0c1ce961965c7dbfb5cb86e45d0

AES-256 Key
256 bits
hex

1ff1f35b9d3ccfddcf7c079c2389a21643f10b3ea3c0ad7b5a9328746198d05f

IV (Initialization Vector)
128 bits
hex, 16 bytes
aea568a4a34f3aca9009cfed4192f89d

Usage Example
Python (cryptography)

Copy
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
import os

key = bytes.fromhex('15c2ccf5ecabb6e90811d2cf496e781caf6cca9c2c343caa042d1863ea990c3a')
iv = bytes.fromhex('0620eff0529ba35f97523b5414e5c26f')

# Encrypt
cipher = Cipher(algorithms.AES(key), modes.GCM(iv))
encryptor = cipher.encryptor()
ciphertext = encryptor.update(b"Secret message") + encryptor.finalize()
tag = encryptor.tag

# Decrypt
cipher = Cipher(algorithms.AES(key), modes.GCM(iv, tag))
decryptor = cipher.decryptor()
plaintext = decryptor.update(ciphertext) + decryptor.finalize()
For demonstration only

For production encryption, generate keys locally using the terminal commands below. Never transmit encryption keys over the network.

Bulk Generation
Generate

10
keys
Generate
Generate in Terminal
AES-256 key

openssl rand -hex 32

IV (16 bytes)

openssl rand -hex 16

Python

python3 -c "import secrets; print(secrets.token_hex(32))"



# 30
RSA Key Pair Generator
Generate RSA public and private key pairs for asymmetric encryption, digital signatures, and secure key exchange.

Key Size

2048 bits (standard)
Generate Key Pair
Algorithm:
RSA-OAEP with SHA-256
Key Size:
2048 bits
Click "Generate Key Pair" to create a new RSA key pair.

Security Notice

While these keys are generated securely in your browser, for production use you should generate keys locally using OpenSSL or your operating system's tools. Never share your private key or transmit it over the network.

Common Use Cases
Encryption
Encrypt sensitive data with the public key. Only the private key holder can decrypt it.

Digital Signatures
Sign documents or code with your private key. Anyone can verify with your public key.

JWT Signing (RS256)
Sign JWTs with RSA for scenarios where multiple parties need to verify tokens.

Key Exchange
Securely exchange symmetric keys by encrypting them with the recipient's public key.

Key Size Recommendations
Key Size	Security Level	Recommended For
2048 bits	~112 bits	General use, adequate until ~2030
4096 bits	~140 bits	High security, long-term protection
Generate Locally (Recommended)
For production use, generate RSA keys locally:

Generate private key (OpenSSL)

openssl genrsa -out private.pem 2048

Extract public key

openssl rsa -in private.pem -pubout -out public.pem

Generate with passphrase (more secure)

openssl genrsa -aes256 -out private.pem 4096

Generate SSH key pair

ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa



# 31
HMAC Secret Generator
Generate secure secrets for HMAC (Hash-based Message Authentication Code). Used to verify data integrity and authenticity.

Hash Algorithm

HMAC-SHA256
Format

Base64
Generate
Key size:
256 bits
(32 bytes)
256 bits

qpZgzG6l3yp5phfEYBTUxZLwQm5piOAX9TB22ES+2ZQ=

256 bits

3PIWlbJaFQcEC74LaSangz097+BJZ6w9f1Z22tICqC4=

256 bits

lqIBktXEsg4J7jSD04TkdUrc/W+YJFXMXu0VpwDxlbs=

256 bits

gtZ7AA3yh19CHGj1oU8NgyVW42RSNni9awi2J8Ohq8g=

Usage Examples
Node.js

Copy
const crypto = require('crypto');

const secret = 'qpZgzG6l3yp5phfEYBTUxZLwQm5piOAX9TB22ES+2ZQ=';
const message = 'Data to authenticate';

const hmac = crypto.createHmac('sha256', Buffer.from(secret, 'base64'));
hmac.update(message);
const signature = hmac.digest('hex');

console.log(signature);
Python

Copy
import hmac
import hashlib
import base64

secret = base64.b64decode('qpZgzG6l3yp5phfEYBTUxZLwQm5piOAX9TB22ES+2ZQ=')
message = b'Data to authenticate'

signature = hmac.new(secret, message, hashlib.sha256).hexdigest()
print(signature)
When to use HMAC

Verifying API request signatures (e.g., webhooks)
Creating secure session tokens
Authenticating messages between services
Implementing signed URLs
Bulk Generation
Generate

10
secrets
Generate
Generate in Terminal
OpenSSL (base64)

openssl rand -base64 32

OpenSSL (hex)

openssl rand -hex 32

Python

python3 -c "import secrets; print(secrets.token_urlsafe(32))"



# 32
Hash Generator
Generate cryptographic hashes using MD5, SHA-1, SHA-256, and SHA-512 algorithms. Useful for checksums, data integrity, and understanding password hashing.

Enter Text to Hash
Type or paste text here...
MD5
Enter text above to generate hash
128-bit (32 hex chars) - Not recommended for security
SHA-1
Enter text above to generate hash
160-bit (40 hex chars) - Deprecated for security
SHA-256
Enter text above to generate hash
256-bit (64 hex chars) - Recommended
SHA-512
Enter text above to generate hash
512-bit (128 hex chars) - High security
Password Hashing with bcrypt
For password storage, use bcrypt, Argon2, or scrypt - NOT MD5/SHA. These algorithms are intentionally slow and include salting.

Node.js

Copy
const bcrypt = require('bcrypt');

// Hash a password
const hash = await bcrypt.hash('password', 10);
// $2b$10$N9qo8uLOickgx2ZMRZoMye...

// Verify a password
const isValid = await bcrypt.compare('password', hash);
Important: Hash vs Encryption

Hashing is one-way - you cannot recover the original text from a hash
MD5 and SHA-1 are broken - don't use for security purposes
Never store plain SHA hashes of passwords - use bcrypt/Argon2 instead
Hashes are deterministic - same input always produces same output
Common Use Cases
File Checksums
Verify file integrity after downloads. SHA-256 is the standard for software verification.

Data Deduplication
Identify duplicate content by comparing hashes instead of full content.

Digital Signatures
Sign a hash of a document instead of the entire document for efficiency.

Caching Keys
Generate unique cache keys from request parameters or content.

Generate Hashes in Terminal
macOS / Linux

Copy
# MD5
echo -n "text" | md5sum
# or on macOS:
echo -n "text" | md5

# SHA-256
echo -n "text" | sha256sum

# SHA-512
echo -n "text" | sha512sum

# File hash
sha256sum filename.txt
Python

Copy
import hashlib

text = "text"
print(hashlib.sha256(text.encode()).hexdigest())


# 33
Salt Generator
Generate cryptographically random salt values for password hashing and other cryptographic operations. Salts ensure identical inputs produce different outputs.

Length (bytes)

16 bytes (128 bits)
Format

Hexadecimal
Generate
Entropy:
128 bits
128 bits

211e48352bd949d7a02b5003d5d603a9

128 bits

33490fb77e0875b76e6f56f07959db5d

128 bits

1cb80b1f7cb5a1dc2b0956452a6e90e8

128 bits

e925dd4cbe560ae3849c0e7a3491cbd5

128 bits

da6eadd4a2b0e6677b044ad714b97ee5

128 bits

01bda3919b1b6ce9f036104bb5f08bd9

Usage Examples
Python (bcrypt)

Copy
import bcrypt

password = b"user_password"

# bcrypt generates its own salt internally
hashed = bcrypt.hashpw(password, bcrypt.gensalt(rounds=12))

# Verify
if bcrypt.checkpw(password, hashed):
    print("Password matches!")
Node.js (argon2)

Copy
const argon2 = require('argon2');

// argon2 generates salt internally
const hash = await argon2.hash('user_password');

// Verify
if (await argon2.verify(hash, 'user_password')) {
    console.log('Password matches!');
}
Manual salt usage

Copy
const crypto = require('crypto');

const salt = '211e48352bd949d7a02b5003d5d603a9';
const password = 'user_password';

// PBKDF2 with custom salt
const hash = crypto.pbkdf2Sync(
  password, 
  Buffer.from(salt, 'hex'),
  100000,  // iterations
  64,      // key length
  'sha512'
).toString('hex');
Why use salts?

Prevents rainbow table attacks
Ensures identical passwords hash to different values
Makes precomputation attacks infeasible
Salts should be unique per password, not secret
Use proper password hashing

For password storage, use algorithms like bcrypt, argon2, or scrypt which handle salt generation internally. Only use manual salting for other cryptographic operations.

Bulk Generation
Generate

10
salts
Generate
Generate in Terminal
16-byte salt (hex)

openssl rand -hex 16

Python

python3 -c "import secrets; print(secrets.token_hex(16))"

Linux /dev/urandom

head -c 16 /dev/urandom | xxd -p -c 64



# 34
SSH Key Generation
Demo Only
SSH keys should always be generated locally on your machine. This page provides guidance and terminal commands for secure key generation.

📖 Complete SSH Setup Guide →
Never generate SSH keys online

SSH private keys must be generated on your local machine and never transmitted over the internet. A compromised private key gives attackers full access to any system where you've added the public key.

Use the terminal commands below to generate keys securely on your own system.

Ed25519 (Recommended)
Ed25519 is a modern, secure algorithm. It's faster and has smaller keys than RSA while providing equivalent security.

Generate Ed25519 key pair

ssh-keygen -t ed25519 -C "your_email@example.com"

With custom filename

ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519_github

Without passphrase (not recommended)

ssh-keygen -t ed25519 -C "your_email@example.com" -N ""

RSA (Legacy Compatibility)
Use RSA if you need compatibility with older systems. Always use at least 4096 bits.

Generate RSA 4096-bit key pair

ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

With stronger key derivation

ssh-keygen -t rsa -b 4096 -o -a 100 -C "your_email@example.com"

View & Copy Public Key
View Ed25519 public key

cat ~/.ssh/id_ed25519.pub

View RSA public key

cat ~/.ssh/id_rsa.pub

Copy to clipboard (macOS)

pbcopy < ~/.ssh/id_ed25519.pub

Copy to clipboard (Linux)

xclip -sel clip < ~/.ssh/id_ed25519.pub

Example Output
Your public key will look similar to this (this is an example, not a real key):

~/.ssh/id_ed25519.pub (example)
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl user@example.com
Add to SSH Agent
Start SSH agent

eval $(ssh-agent -s)

Add key to agent

ssh-add ~/.ssh/id_ed25519

Add to macOS Keychain

ssh-add --apple-use-keychain ~/.ssh/id_ed25519

SSH key best practices

Always use a strong passphrase to protect your private key
Use Ed25519 for new keys unless legacy compatibility is required
Keep your private key permissions at 600 (chmod 600 ~/.ssh/id_ed25519)
Use different keys for different services when possible
Rotate keys periodically and remove unused public keys from servers
Never share your private key or store it in version control
SSH Config Example
~/.ssh/config

Copy
# GitHub
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github
  AddKeysToAgent yes

# Work server
Host work
  HostName server.company.com
  User deploy
  IdentityFile ~/.ssh/id_ed25519_work
  Port 22


# 35
PGP Key Pair Generator
Generate secure PGP (Pretty Good Privacy) key pairs for email encryption, digital signatures, and secure communication. Compatible with GPG and OpenPGP standards.

User Identity
Full Name *
John Doe
Email Address *
john@example.com
Comment (Optional)
Work key
Key Configuration
Algorithm

RSA
Key Size

2048 bits
Expiration

Never expires
Generate PGP Key Pair
How to Use Your PGP Keys
1. Import Keys into GPG
Save your keys to files and import them into your GPG keyring:

gpg --import public-key.asc

gpg --import private-key.asc

gpg --list-secret-keys --keyid-format LONG

2. Encrypt a Message
Encrypt a message for someone using their public key:

echo 'Secret message' | gpg --encrypt --armor --recipient recipient@example.com

gpg --encrypt --armor --recipient recipient@example.com message.txt

The encrypted output can be safely sent via email or any insecure channel.

3. Decrypt a Message
Decrypt messages sent to you:

gpg --decrypt encrypted-message.asc

echo '-----BEGIN PGP MESSAGE-----...' | gpg --decrypt

4. Sign a Message
Create a digital signature to verify message authenticity:

gpg --clearsign message.txt

echo 'Important message' | gpg --clearsign

gpg --detach-sign --armor document.pdf

5. Verify Signatures
Verify the authenticity of signed messages:

gpg --verify signed-message.asc

gpg --verify document.pdf.asc document.pdf

6. Export and Share Keys
Share your public key with others:

gpg --export --armor your-email@example.com > public-key.asc

gpg --send-keys --keyserver keyserver.ubuntu.com YOUR_KEY_ID

gpg --search-keys someone@example.com

Email Client Integration Examples
Thunderbird Setup
Install Thunderbird and set up your email account
Go to Tools → Account Settings → End-to-End Encryption
Click "Add Key" → "Import a personal key from file"
Select your private key file and enter passphrase
Enable "Digital signing" and "Require encryption" as needed
Mailvelope (Web)
Install Mailvelope browser extension
Open Mailvelope Options → Key Management
Click "Import Keys" and paste your private key
Add your email accounts to Mailvelope
Compose encrypted emails directly in your webmail
Apple Mail (macOS)
Import your key into GPG Suite for macOS
Open Apple Mail preferences
Go to Accounts → Select account → Advanced
Enable "Encrypt outgoing mail" and "Sign outgoing mail"
Mail will automatically use your PGP key
Outlook with Gpg4win
Install Gpg4win (includes Kleopatra key manager)
Import your key using Kleopatra
Install GpgOL plugin for Outlook integration
Restart Outlook and look for encryption options
Use encrypt/sign buttons when composing emails
Real-World Use Cases & Examples
🏢 Business Communication
Secure client communications and confidential documents:

# Encrypt contract for client review
gpg --encrypt --armor --recipient client@company.com contract-v2.pdf
# Sign press release for authenticity
gpg --clearsign --local-user pr@yourcompany.com press-release.txt
💻 Software Development
Sign git commits and release packages:

# Configure git to sign commits
git config --global user.signingkey YOUR_KEY_ID
git config --global commit.gpgsign true
# Sign a software release
gpg --detach-sign --armor myapp-v1.2.3.tar.gz
🏥 Healthcare & Legal
HIPAA-compliant communication and legal document verification:

# Encrypt patient records for transfer
gpg --cipher-algo AES256 --encrypt --recipient doctor@hospital.com patient-file.pdf
# Sign legal document with timestamp
gpg --clearsign --local-user lawyer@firm.com legal-brief.txt
🔒 Personal Privacy
Secure personal communications and file backup:

# Encrypt backup files
tar czf - important-docs/ | gpg --symmetric --cipher-algo AES256 > backup.tar.gz.gpg
# Secure email to family member
echo "Family news..." | gpg --encrypt --armor --recipient family@example.com
About PGP Encryption
Pretty Good Privacy (PGP) is a data encryption and decryption program that provides cryptographic privacy and authentication for data communication. PGP uses a combination of symmetric-key cryptography and public-key cryptography.

Key Features
• End-to-end encryption for emails
• Digital signatures for authenticity
• Key distribution and management
• Cross-platform compatibility
• Open source implementations (GPG)
Use Cases
• Secure email communication
• File encryption and signing
• Software distribution verification
• Secure messaging applications
• Document authentication
Algorithm Comparison
Algorithm	Key Size	Performance	Security Level	Recommended For
RSA 2048	2048 bits	Fast	Good	General use, compatibility
RSA 4096	4096 bits	Slower	Excellent	Long-term security
ECC P-256	256 bits	Very Fast	Good	Mobile, IoT devices
ECC P-384	384 bits	Fast	Excellent	High security applications
Frequently Asked Questions
What is the difference between RSA and ECC keys?
RSA keys are widely supported and use larger key sizes (2048-4096 bits). ECC keys are newer, more efficient, and provide equivalent security with smaller key sizes (256-384 bits). Choose RSA for maximum compatibility, ECC for better performance.

How do I use the generated PGP key?
Import your keys into GPG using gpg --import. For email, configure your email client (Thunderbird, Apple Mail) or use browser extensions like Mailvelope for webmail. Always keep your private key secure and never share it.

Should my PGP key expire?
Yes, setting an expiration date is recommended for security. You can always extend the expiration later if needed. If you lose access to your key, expiration prevents it from being used indefinitely. Choose 1-2 years for personal use, shorter for high-security contexts.

Is it safe to generate keys in a browser?
Our generator runs entirely in your browser using secure Web Crypto APIs, and keys never leave your device. However, for highest security, use offline tools like GPG on an air-gapped computer, especially for keys protecting sensitive data.

What should I do with the revocation certificate?
Store your revocation certificate in a safe place separate from your private key. If your private key is ever compromised or lost, you can use the revocation certificate to notify others that the key should no longer be trusted.

Can I use PGP for file encryption, not just email?
Absolutely! PGP can encrypt any type of file or data. Use gpg --encryptto encrypt files, documents, backups, or any sensitive data. Many backup tools and applications also support PGP encryption natively.

Security Notice

Your private key is generated entirely in your browser and never sent over the network. However, for maximum security when generating keys for real use, use offline tools like GPG on an air-gapped computer. Store your private key and revocation certificate securely - losing them means losing access to encrypted data.


# 36
WireGuard Key Generation
Demo Only
WireGuard VPN keys should be generated locally using the wg command. This page provides guidance for secure key generation and configuration.

Never generate VPN keys online

WireGuard private keys control access to your VPN network. Always generate them locally on the machine where they will be used. A compromised private key allows attackers to intercept all your VPN traffic.

Install WireGuard
macOS (Homebrew)

brew install wireguard-tools

Debian/Ubuntu

sudo apt install wireguard

Fedora

sudo dnf install wireguard-tools

Generate Key Pair
Generate private and public key files

wg genkey | tee privatekey | wg pubkey > publickey

Generate private key only (outputs to stdout)

wg genkey

Derive public key from private key

echo 'PRIVATE_KEY' | wg pubkey

Preshared Key (Optional)
For additional security, you can add a preshared key between peers:

Generate preshared key

wg genpsk

Save to file

wg genpsk > preshared.key

Example Configuration
/etc/wireguard/wg0.conf (Server)

Copy
[Interface]
# Server's private key
PrivateKey = SERVER_PRIVATE_KEY_HERE
Address = 10.0.0.1/24
ListenPort = 51820
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT

[Peer]
# Client's public key
PublicKey = CLIENT_PUBLIC_KEY_HERE
AllowedIPs = 10.0.0.2/32
/etc/wireguard/wg0.conf (Client)

Copy
[Interface]
# Client's private key
PrivateKey = CLIENT_PRIVATE_KEY_HERE
Address = 10.0.0.2/24
DNS = 1.1.1.1

[Peer]
# Server's public key
PublicKey = SERVER_PUBLIC_KEY_HERE
Endpoint = vpn.example.com:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25
Management Commands
Start WireGuard interface

sudo wg-quick up wg0

Stop WireGuard interface

sudo wg-quick down wg0

Show WireGuard status

sudo wg show

Enable on boot (systemd)

sudo systemctl enable wg-quick@wg0

WireGuard best practices

Generate unique key pairs for each device
Never share private keys between devices
Set restrictive permissions on config files (chmod 600)
Use preshared keys for additional security on sensitive connections
Regularly rotate keys, especially if a device is lost or compromised
Keep the AllowedIPs as restrictive as possible


# 37
VAPID Key Generator
Generate VAPID (Voluntary Application Server Identification) key pairs for Web Push notifications. Required for sending push notifications through browsers.

Algorithm:
ECDSA P-256
Format:
URL-safe Base64
Generate VAPID Keys
Click "Generate VAPID Keys" to create a new key pair.

Important

Generate keys once and reuse them for your application
If you change keys, all existing subscriptions become invalid
Store the private key securely as an environment variable
The public key is safe to expose in client-side code
What is VAPID?
VAPID (Voluntary Application Server Identification) is a specification that allows your application server to identify itself to push services (like Firebase Cloud Messaging, Mozilla Push Service, etc.) when sending push notifications.

Why VAPID?
No need to register with each push service
Works with all major browsers
Provides sender identification
Enables rate limiting and abuse prevention
Browser Support
Chrome / Edge (Chromium)
Firefox
Safari (macOS/iOS 16+)
Opera
Generate Locally
Generate VAPID keys using popular libraries:

Node.js web-push (recommended)

npx web-push generate-vapid-keys

Python py-vapid

pip install py-vapid && vapid --gen

OpenSSL (generates PEM format)

openssl ecparam -name prime256v1 -genkey -noout -out vapid_private.pem



# 38
Secret Key Generator
Generate cryptographically secure secrets for session management, API authentication, and other security-sensitive applications.

Length (bytes)

32 bytes (256 bits)
Format

Base64
Generate
Entropy:
256 bits
256 bits

ha+t9RcI8ZP1QNjw4QfAsnHxcwjun/a2QQMaQA2RuHA=

256 bits

9uWpPYSQCxZmEmt+N/xY9nf0Vh4zdfgAB9dREmw5KYY=

256 bits

Oxj8rO+OejTiDZ4I3eoVZAwmtULtetJRUL34MgWkXtg=

256 bits

cdmjd65KtAcdwR0Nx04nRBiYo48T01Lw7TB+s2t3Tls=

256 bits

7DA9JLmydX4WuOpu6LIfWdpqFodop3JEBS8n+hkbH5E=

Common Uses
.env

Copy
# Session secret
SESSION_SECRET=ha+t9RcI8ZP1QNjw4QfAsnHxcwjun/a2QQMaQA2RuHA=

# Cookie signing secret
COOKIE_SECRET=9uWpPYSQCxZmEmt+N/xY9nf0Vh4zdfgAB9dREmw5KYY=

# CSRF token secret
CSRF_SECRET=Oxj8rO+OejTiDZ4I3eoVZAwmtULtetJRUL34MgWkXtg=
Express.js session

Copy
const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));
Choosing secret length

128 bits (16 bytes): Minimum for most applications
256 bits (32 bytes): Recommended for session secrets
512 bits (64 bytes): Maximum security for sensitive operations
Bulk Generation
Generate

10
secrets
Generate
Generate in Terminal
Base64

openssl rand -base64 32

Hexadecimal

openssl rand -hex 32

URL-safe (Python)

python3 -c "import secrets; print(secrets.token_urlsafe(32))"

Node.js

node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"



# 39
Username Generator
Generate unique, random usernames for gaming, social media, email accounts, and online services. Multiple styles to match your needs.

Style

Gaming (SwiftWolf, DarkPhoenix)

Include numbers
Generate
OmegaScout123

ThunderDragon155

FastDragon503

QuantumVolt791

ZeroApex775

HiddenSage687

FastEcho351

HiddenEagle939

FrozenCipher706

CalmViper729

Username Styles Explained
Gaming
Bold, memorable names perfect for games and streaming.

ShadowNinja, CosmicDragon42, NeonPhantom
Professional
Clean, work-appropriate usernames for business accounts.

dev_phoenix, tech_sage, data_ops
Memorable
Easy to remember and type, with word-based patterns.

swift-hawk-77, cosmic-blade-33
Anonymous
Random strings for privacy-focused accounts.

anon_8k3m7x9p, user_q2w4e6r8
Username Tips

Check availability on your target platform before committing
Avoid using personal information (real name, birthdate)
Keep it easy to spell if others need to find you
Consider using different usernames for different purposes
Add numbers if your preferred username is taken
Bulk Generation
Generate

10
usernames
Generate
