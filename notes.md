```js
Project.findAll({
  where: {
    name: 'Some Project',
    [Op.not]: [
      { id: [1, 2, 3] },
      {
        description: {
          [Op.like]: 'Hello%',
        },
      },
    ],
  },
});
```
```sql
SELECT * 
FROM Project
WHERE name = 'Some Project'
AND id NOT IN (1, 2, 3)
AND description NOT LIKE 'Hello%';
```