import { Router } from 'express';
import { MenusController } from '../modules/menus/menus.contoller.js';

const menusRouter = Router();
const menusController = new MenusController();

// 메뉴 등록
menusRouter.post('/:store_id', menusController.createMenu);

// 메뉴 전체 조회
menusRouter.get('/:store_id', menusController.getMenusAll);

// 메뉴 단일 조회
menusRouter.get('/:store_id/:id', menusController.getMenuOne);

// 메뉴 수정
menusRouter.patch('/:store_id/:id', menusController.updateMenu);

// 메뉴 삭제
menusRouter.delete('/:store_id/:id', menusController.deleteMenu);

export default menusRouter;
