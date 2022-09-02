SELECT u.country, SUM(t.usd_amount) 
FROM users u 
INNER JOIN transactions t ON u.id = t.user_id 
GROUP BY u.country HAVING SUM(t.usd_amount) < 500