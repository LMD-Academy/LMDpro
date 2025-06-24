
# Module 3.3.CY: Cryptography Basics & Applications

**Level:** 3 (Professional - Specialization)
**Major:** Cybersecurity (CY)

**Estimated Content Length:** 15-25 A4 Pages

**Prerequisites:** Module 3.1.CY (Introduction to Cybersecurity & Threats)

**Learning Objectives (Illustrative):**
*   Understand fundamental cryptographic concepts (encryption, decryption, keys, ciphers).
*   Differentiate between symmetric and asymmetric cryptography.
*   Learn about common symmetric algorithms (e.g., DES, AES basics) and their modes of operation.
*   Learn about common asymmetric algorithms (e.g., RSA, ECC basics).
*   Understand the principles and applications of cryptographic hash functions (e.g., MD5, SHA).
*   Explore digital signatures, digital certificates, and Public Key Infrastructure (PKI) basics.
*   Recognize common applications of cryptography in securing data at rest and in transit.
*   Introduce common cryptographic attacks and limitations.

**Key Topics to be Covered (Illustrative):**
*   **Core Cryptographic Concepts:**
    *   Plaintext, Ciphertext, Encryption, Decryption, Key, Cipher.
    *   Goals: Confidentiality, Integrity, Authentication, Non-repudiation.
    *   Historical ciphers (Caesar, Vigenère) - for illustration.
*   **Symmetric Key Cryptography (Secret Key Cryptography):**
    *   Single shared key for encryption and decryption.
    *   **Stream Ciphers vs. Block Ciphers.**
    *   **Block Cipher Modes of Operation:** ECB, CBC, CTR, GCM (overview).
    *   **Common Algorithms:** Data Encryption Standard (DES) - and its weaknesses, Triple DES (3DES), Advanced Encryption Standard (AES) - structure and key sizes.
    *   Key distribution challenges.
*   **Asymmetric Key Cryptography (Public Key Cryptography):**
    *   Uses a pair of keys: a public key (widely distributed) and a private key (kept secret).
    *   **Common Algorithms:**
        *   RSA (Rivest-Shamir-Adleman): Based on difficulty of factoring large numbers. Used for encryption and digital signatures.
        *   Diffie-Hellman Key Exchange: Allows two parties to establish a shared secret key over an insecure channel.
        *   Elliptic Curve Cryptography (ECC): Provides similar security with smaller key sizes compared to RSA.
*   **Cryptographic Hash Functions:**
    *   Produces a fixed-size hash value (digest) from an arbitrary-sized input.
    *   **Properties:** One-way (preimage resistance), second preimage resistance, collision resistance.
    *   **Common Algorithms:** MD5 (Message Digest 5 - considered insecure for many uses), SHA-1 (Secure Hash Algorithm 1 - deprecated), SHA-2 family (SHA-256, SHA-512), SHA-3.
    *   **Applications:** Data integrity verification, password storage (hashed passwords), digital signatures.
*   **Digital Signatures:**
    *   Provides authenticity, non-repudiation, and integrity for digital messages.
    *   Created by encrypting a hash of the message with the sender's private key.
    *   Verified by decrypting the signature with the sender's public key and comparing the hash.
*   **Digital Certificates and Public Key Infrastructure (PKI):**
    *   **Digital Certificate (X.509):** Electronically binds a public key to an identity (person, organization, server), signed by a trusted Certificate Authority (CA).
    *   **Certificate Authority (CA):** Issues and manages digital certificates.
    *   **PKI Components:** CAs, Registration Authorities (RAs), Certificate Revocation Lists (CRLs) / Online Certificate Status Protocol (OCSP).
    *   **Purpose:** Establishes trust in public keys.
*   **Applications of Cryptography:**
    *   Securing data in transit (e.g., HTTPS/TLS, SSH, VPNs).
    *   Securing data at rest (e.g., full-disk encryption, database encryption, file encryption).
    *   Email security (e.g., PGP/GPG, S/MIME).
*   **Introduction to Cryptographic Attacks:**
    *   Brute-force attacks, dictionary attacks.
    *   Frequency analysis (for simple ciphers).
    *   Known-plaintext, chosen-plaintext, chosen-ciphertext attacks (overview).
    *   Side-channel attacks (overview).
*   **Key Management:** Importance and challenges of securely generating, distributing, storing, and revoking cryptographic keys.

(Detailed module content will be developed here by subject matter experts.)
