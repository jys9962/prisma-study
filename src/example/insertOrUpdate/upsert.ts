import { execute } from '../../libs/execute';

execute(
  (prisma) => {
    return prisma.article.upsert({
      create: {
        id: 6,
        createdAt: new Date(),
        contents: 'contents',
        title: 'title',
        categoryId: 11,
        userId: 11,
        deletedAt: null,
        isDeleted: false,
      },
      update: {
        contents: 'updated contents',
      },
      where: {
        id: 123,
      },
    });
  },
);

/*
prisma:query BEGIN
prisma:query SELECT `api`.`articles`.`id` FROM `api`.`articles` WHERE (`api`.`articles`.`id` = ? AND 1=1)
prisma:query INSERT INTO `api`.`articles` (`id`,`category_id`,`user_id`,`title`,`contents`,`is_deleted`,`deleted_at`,`created_at`) VALUES (?,?,?,?,?,?,?,?)
prisma:query SELECT `api`.`articles`.`id`, `api`.`articles`.`category_id`, `api`.`articles`.`user_id`, `api`.`articles`.`title`, `api`.`articles`.`contents`, `api`.`articles`.`is_deleted`, `api`.`articles`.`deleted_at`, `api`.`articles`.`created_at` FROM `api`.`articles` WHERE `api`.`articles`.`id` = ? LIMIT ? OFFSET ?
prisma:query COMMIT
* */