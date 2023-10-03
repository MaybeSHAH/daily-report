
const connection = require('../connection');
// const bcrypt = require('bcrypt');
// const bcrypt = require('bcryptjs');


const login = (req, res, next) => {

    const { employeeCode, password } = req.body;
    // Check if either employeeCode or password is missing

    if (!employeeCode || !password) {
      return res.status(400).json({ message: 'Both employeeCode and password are required.' });
    }
  
    // Construct the SQL query to find the user by employeeCode
    const query = "SELECT * FROM users WHERE employeeCode = ?";
  
//     // Use a MySQL prepared statement to avoid SQL injection
    connection.query(query, [employeeCode], (err, results) => {

      if (err) {
        return res.status(500).json(err);
      } else {
            results.map((e,i)=>{
                e.password === password ? res.status(200).json({ status:200,type:e.type} ) : res.status(401).json({ message: 'Invalid credentials' })
            })
      }
    // if (rows.length === 0) {
    //     connection.release();
    //     return res.status(401).json({ message: 'Invalid credentials' });
    //   }
  
    //   const user = rows[0];
  
    //   // Compare the provided password with the stored hash using bcryptjs
    //   const isPasswordValid = await bcrypt.compare(password, user.password);
  
    //   if (!isPasswordValid) {
    //     connection.release();
    //     return res.status(401).json({ message: 'Invalid credentials' });
    //   }
  
    //   // Send the user's type as a response
    //   res.json({ type: user.type });

    // }

      



  
    });
  };

  exports.login = login;
  