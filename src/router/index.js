const Router = require('koa-router');
const { getUsers, getUser } = require('../controller');

const router = new Router();

router.get('/', (ctx) => ctx.body = '최초 페이지');

router.get('/users', getUsers);
router.get('/users/:id', getUser);

module.exports = router;
