const db = require('../config/config');

const Promo = {};

Promo.getAll = (result) => {
    const sql = `
    SELECT
        CONVERT(id, char) AS id,
        name,
        description
    FROM
        promos
    ORDER BY
        name
    `;

    db.query(
        sql,
        (err, data) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Promo:', data);
                result(null, data);
            }
        }
    )
}

Promo.create = (promos, result) => {

    const sql = `
    INSERT INTO
        promos(
            name,
            description,
            created_at,
            updated_at   
        )
    VALUES(?, ?, ?, ?)
    `;

    db.query(
        sql, 
        [
            promos.name,
            promos.description,
            new Date(),
            new Date(),
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Id de la nueva promo:', res.insertId);
                result(null, res.insertId);
            }
        }

    )

}


module.exports = Promo;