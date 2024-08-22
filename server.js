require('dotenv').config();
require('express-async-errors');

// extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')




const express = require('express');
const app = express();

//connect DB
const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication')

//routers
const authRouter = require('./routes/auth')
const projectsRouter = require('./routes/projectsRoutes')
const skillsRouter = require('./routes/skillsRoutes')
const contactRouter = require('./routes/contactRoutes')
const accomplishmentsRouter = require('./routes/accomplishmentsRoutes')
const educationRouter = require('./routes/educationRoutes')
const experienceRouter = require('./routes/experienceRoutes')
const testimonialsRouter = require('./routes/testimonialsRoutes')
const homeRouter = require('./routes/homeRoutes')



// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// extra packages
app.set('trust proxy',1);
app.use(rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 mints
  max: 100,
})); 
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());


// routes
app.use('/api/v1/',homeRouter)
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/projects',projectsRouter)
app.use('/api/v1/skills',skillsRouter)
app.use('/api/v1/contact',contactRouter)
app.use('/api/v1/accomplishments',accomplishmentsRouter)
app.use('/api/v1/education',educationRouter)
app.use('/api/v1/experience',experienceRouter)
app.use('/api/v1/testimonials',testimonialsRouter)


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
