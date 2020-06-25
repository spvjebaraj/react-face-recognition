BEGIN TRANSACTION;

INSERT INTO users (name, email, entries, joined) values ('anitha', 'anitha@gmail.com', 0, '2020-05-01');
INSERT INTO login (hash, email) values ('$2a$08$bJafH8Lh7ljQdMxFTtwZGuEKbWMjrZLqrdzbBAc7aXvBBltUq5.pS', 'anitha@gmail.com');

COMMIT;