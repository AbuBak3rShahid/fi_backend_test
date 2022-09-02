SELECT count(id) as user_count 
FROM transactions 
WHERE usd_amount BETWEEN 1000 AND 2000