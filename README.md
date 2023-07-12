1.
SELECT c.contents, u.username
FROM comments c
JOIN users u ON c.user_id = u.id
WHERE c.photo_id = 3;


2.
SELECT AVG(comment_count) AS average_comments_per_photo
FROM (
  SELECT COUNT(*) AS comment_count
  FROM comments
  GROUP BY photo_id
) AS counts;


3.
SELECT p.id, p.url, COUNT(*) AS comment_count
FROM photos p
JOIN comments c ON p.id = c.photo_id
GROUP BY p.id, p.url
ORDER BY comment_count DESC
LIMIT 1;



4.
select COUNT(*) AS comment_count
FROM comments
WHERE photo_id = 10;


5.
SELECT user_id, COUNT(*) AS activity_count
FROM (
  SELECT user_id
  FROM comments
  UNION ALL
  SELECT user_id
  FROM photos
) AS activity
GROUP BY user_id
ORDER BY activity_count DESC
LIMIT 1;


6.
SELECT AVG(LENGTH(contents)) AS average_characters_per_comment
FROM comments;




