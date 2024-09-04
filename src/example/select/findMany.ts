import { execute } from '../../libs/execute';

execute(
  (prisma) => {
    return prisma.article.findMany({
    });
  },
);

/*
SELECT `api`.`members`.`id`, `api`.`members`.`email`, `api`.`members`.`password`, `api`.`members`.`name`, `api`.`members`.`created_at` FROM `api`.`members` WHERE `api`.`members`.`password` = ?
* */
