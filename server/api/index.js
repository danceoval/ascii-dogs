const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))

const kiki = `
	     *     \n
    !._ ('_.  \n
     ( )( )  \n
     (|  ))   \n
`;

const lily = `
	            __ \n
	(..,--------'()'--o \n
	 (_    ___    /~" \n
	  (_)_)  (_)_) \n

`;

const bruno = `
\n
 ()^^()   \n               
 (.o.)   \n
.(  )  \n     
.||||   \n
 V  V \n
  \n
 `;

router.get('/dogs', (req, res, next) => {
	const dogs = [kiki, lily, bruno]
	res.json({dogs})
})


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
