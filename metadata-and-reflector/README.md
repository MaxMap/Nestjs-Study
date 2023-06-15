# Metadata

> nestjs 提供的草案
> Reflect.getMetadata 获取元数据
> Reflect.defineMetadata 设置元数据

## 方法

```txt
reflector.get('metadataKey',target)
@param metadataKey-要检索的元数据的查找键
@param target-从中检索元数据的上下文（装饰对象）
检索指定目标的指定键的元数据。

```

```txt
- reflector.getAll('target', [])
指定的一组目标检索指定密钥的元数据
@param metadataKey-要检索的元数据的查找键
@param targets-从中检索元数据的上下文（装饰对象）

```

```txt
- reflector.getAllAndMerge('target', [])
检索指定目标集的指定键的元数据并合并结果。
@param metadataKey-要检索的元数据的查找键
@param targets-从中检索元数据的上下文（装饰对象）

```

```txt
- reflector.getAllAndOverride('target', [])
检索指定目标集的指定键的元数据，并返回第一个未定义的值。
@param metadataKey-要检索的元数据的查找键
@param targets-从中检索元数据的上下文（装饰对象）

```

```txt
getAll ===> [ [ 'admin' ], [ 'user' ] ]
getAllAndMerge ===> [ 'admin', 'user' ]
getAllAndOverride ===> [ 'admin' ]

```
