-- @param {String} $1:categoryId
-- @param {Int} $2:offset
-- @param {Int} $3:count
SELECT *
FROM articles a
WHERE a.category_id = ?
LIMIT ?, ?
