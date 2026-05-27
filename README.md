# web-encryptor

![GitHub repo size](https://img.shields.io/github/repo-size/RonnyGST/cpp-fibonacci?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/RonnyGST/cpp-fibonacci?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/RonnyGST/cpp-fibonacci?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/RonnyGST/cpp-fibonacci?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/RonnyGST/cpp-fibonacci?style=for-the-badge)


> Tool for encoding and decoding messages. I practiced Local Storage by creating users, each with their own history of ciphers created so that they can be decoded later.

# How it works

Create an account, no password required. Everything is saved locally in your browser through Local Storage.

Choose between cipher types, Vigenère, or a cipher I created myself while practicing. 

Write the message you want and click the code button. You can click on the encoded message to copy to the clipboard.

When encoding a message, it is automatically added to your encrypted message history in case you need to somehow recover these encrypted messages.

To open the history, click the button in the corner of the page, and then a sidebar will open. Click on the text you want to copy, either the encrypted message or the password for the message. If you think it is necessary, you can delete the message from the history.

To decode an encrypted message, simply change the tool mode to "Decode". The button colors will turn orange. Then paste the encrypted message into the text field and click the decrypt button.

You can log out or delete your account whenever you want. Everything is saved only locally through Local Storage.

# Features
Local Storage <br>
String Manipulation <br>

# Demonstration

https://ronnygst.github.io/web-encryptor/