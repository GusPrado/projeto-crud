const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from pessoas', (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

const findById = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM pessoas WHERE id = ' + id, (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    if (results.length > 0) {
                        resolve(results)
                    } else {
                        resolve({})
                    }

                }
            })
            //connection.query('SELECT * FROM pessoas WHERE id = ' + id, function(err, data) {
            //    if (!err)
            //        console.log(data);
            //    else
            //       console.log(err);
            //})
    })
}

const deleteOne = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query('delete from pessoas where id =' + id + ' limit 1', (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })

}

const create = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`insert into pessoas (nome, nascimento, cargo) values ('${data.nome}', '${data.nascimento}', '${data.cargo}')`, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

const update = (connection, id, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`update pessoas set nome='${data.nome}', nascimento='${data.nascimento}', cargo='${data.cargo}' where id=${id}`, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

module.exports = {
    findAll,
    findById,
    deleteOne,
    create,
    update
}