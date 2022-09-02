SELECT TOP 3 u.id, u.email, t.usd_amount 
FROM users u 
INNER JOIN transactions t ON u.id = t.user_id 
ORDER BY t.usd_amount DESC 