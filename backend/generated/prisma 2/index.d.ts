
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Inbox
 * 
 */
export type Inbox = $Result.DefaultSelection<Prisma.$InboxPayload>
/**
 * Model InboxMember
 * 
 */
export type InboxMember = $Result.DefaultSelection<Prisma.$InboxMemberPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MessageRead
 * 
 */
export type MessageRead = $Result.DefaultSelection<Prisma.$MessageReadPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inbox`: Exposes CRUD operations for the **Inbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inboxes
    * const inboxes = await prisma.inbox.findMany()
    * ```
    */
  get inbox(): Prisma.InboxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inboxMember`: Exposes CRUD operations for the **InboxMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InboxMembers
    * const inboxMembers = await prisma.inboxMember.findMany()
    * ```
    */
  get inboxMember(): Prisma.InboxMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageRead`: Exposes CRUD operations for the **MessageRead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageReads
    * const messageReads = await prisma.messageRead.findMany()
    * ```
    */
  get messageRead(): Prisma.MessageReadDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Inbox: 'Inbox',
    InboxMember: 'InboxMember',
    Message: 'Message',
    MessageRead: 'MessageRead'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "inbox" | "inboxMember" | "message" | "messageRead"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Inbox: {
        payload: Prisma.$InboxPayload<ExtArgs>
        fields: Prisma.InboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>
          }
          findFirst: {
            args: Prisma.InboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>
          }
          findMany: {
            args: Prisma.InboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>[]
          }
          create: {
            args: Prisma.InboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>
          }
          createMany: {
            args: Prisma.InboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>[]
          }
          delete: {
            args: Prisma.InboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>
          }
          update: {
            args: Prisma.InboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>
          }
          deleteMany: {
            args: Prisma.InboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>[]
          }
          upsert: {
            args: Prisma.InboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxPayload>
          }
          aggregate: {
            args: Prisma.InboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInbox>
          }
          groupBy: {
            args: Prisma.InboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<InboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.InboxCountArgs<ExtArgs>
            result: $Utils.Optional<InboxCountAggregateOutputType> | number
          }
        }
      }
      InboxMember: {
        payload: Prisma.$InboxMemberPayload<ExtArgs>
        fields: Prisma.InboxMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InboxMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InboxMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMemberPayload>
          }
          findFirst: {
            args: Prisma.InboxMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InboxMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMemberPayload>
          }
          findMany: {
            args: Prisma.InboxMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMemberPayload>[]
          }
          create: {
            args: Prisma.InboxMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMemberPayload>
          }
          createMany: {
            args: Prisma.InboxMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InboxMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMemberPayload>[]
          }
          delete: {
            args: Prisma.InboxMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMemberPayload>
          }
          update: {
            args: Prisma.InboxMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMemberPayload>
          }
          deleteMany: {
            args: Prisma.InboxMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InboxMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InboxMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMemberPayload>[]
          }
          upsert: {
            args: Prisma.InboxMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMemberPayload>
          }
          aggregate: {
            args: Prisma.InboxMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInboxMember>
          }
          groupBy: {
            args: Prisma.InboxMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<InboxMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.InboxMemberCountArgs<ExtArgs>
            result: $Utils.Optional<InboxMemberCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MessageRead: {
        payload: Prisma.$MessageReadPayload<ExtArgs>
        fields: Prisma.MessageReadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageReadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageReadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReadPayload>
          }
          findFirst: {
            args: Prisma.MessageReadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageReadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReadPayload>
          }
          findMany: {
            args: Prisma.MessageReadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReadPayload>[]
          }
          create: {
            args: Prisma.MessageReadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReadPayload>
          }
          createMany: {
            args: Prisma.MessageReadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageReadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReadPayload>[]
          }
          delete: {
            args: Prisma.MessageReadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReadPayload>
          }
          update: {
            args: Prisma.MessageReadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReadPayload>
          }
          deleteMany: {
            args: Prisma.MessageReadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageReadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageReadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReadPayload>[]
          }
          upsert: {
            args: Prisma.MessageReadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReadPayload>
          }
          aggregate: {
            args: Prisma.MessageReadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageRead>
          }
          groupBy: {
            args: Prisma.MessageReadGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageReadGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageReadCountArgs<ExtArgs>
            result: $Utils.Optional<MessageReadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    inbox?: InboxOmit
    inboxMember?: InboxMemberOmit
    message?: MessageOmit
    messageRead?: MessageReadOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    messages: number
    reads: number
    inboxMemberships: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    reads?: boolean | UserCountOutputTypeCountReadsArgs
    inboxMemberships?: boolean | UserCountOutputTypeCountInboxMembershipsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInboxMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboxMemberWhereInput
  }


  /**
   * Count Type InboxCountOutputType
   */

  export type InboxCountOutputType = {
    messages: number
    members: number
  }

  export type InboxCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | InboxCountOutputTypeCountMessagesArgs
    members?: boolean | InboxCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * InboxCountOutputType without action
   */
  export type InboxCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxCountOutputType
     */
    select?: InboxCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InboxCountOutputType without action
   */
  export type InboxCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * InboxCountOutputType without action
   */
  export type InboxCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboxMemberWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    reads: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reads?: boolean | MessageCountOutputTypeCountReadsArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    profilePicUrl: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    profilePicUrl: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    profilePicUrl: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    profilePicUrl?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    profilePicUrl?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    profilePicUrl?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    profilePicUrl: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    profilePicUrl?: boolean
    createdAt?: boolean
    messages?: boolean | User$messagesArgs<ExtArgs>
    reads?: boolean | User$readsArgs<ExtArgs>
    inboxMemberships?: boolean | User$inboxMembershipsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    profilePicUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    profilePicUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    profilePicUrl?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "profilePicUrl" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | User$messagesArgs<ExtArgs>
    reads?: boolean | User$readsArgs<ExtArgs>
    inboxMemberships?: boolean | User$inboxMembershipsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      reads: Prisma.$MessageReadPayload<ExtArgs>[]
      inboxMemberships: Prisma.$InboxMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      profilePicUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reads<T extends User$readsArgs<ExtArgs> = {}>(args?: Subset<T, User$readsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inboxMemberships<T extends User$inboxMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$inboxMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profilePicUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.reads
   */
  export type User$readsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadInclude<ExtArgs> | null
    where?: MessageReadWhereInput
    orderBy?: MessageReadOrderByWithRelationInput | MessageReadOrderByWithRelationInput[]
    cursor?: MessageReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReadScalarFieldEnum | MessageReadScalarFieldEnum[]
  }

  /**
   * User.inboxMemberships
   */
  export type User$inboxMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberInclude<ExtArgs> | null
    where?: InboxMemberWhereInput
    orderBy?: InboxMemberOrderByWithRelationInput | InboxMemberOrderByWithRelationInput[]
    cursor?: InboxMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InboxMemberScalarFieldEnum | InboxMemberScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Inbox
   */

  export type AggregateInbox = {
    _count: InboxCountAggregateOutputType | null
    _avg: InboxAvgAggregateOutputType | null
    _sum: InboxSumAggregateOutputType | null
    _min: InboxMinAggregateOutputType | null
    _max: InboxMaxAggregateOutputType | null
  }

  export type InboxAvgAggregateOutputType = {
    id: number | null
  }

  export type InboxSumAggregateOutputType = {
    id: number | null
  }

  export type InboxMinAggregateOutputType = {
    id: number | null
    isGroup: boolean | null
    name: string | null
    createdAt: Date | null
    lastMessageAt: Date | null
  }

  export type InboxMaxAggregateOutputType = {
    id: number | null
    isGroup: boolean | null
    name: string | null
    createdAt: Date | null
    lastMessageAt: Date | null
  }

  export type InboxCountAggregateOutputType = {
    id: number
    isGroup: number
    name: number
    createdAt: number
    lastMessageAt: number
    _all: number
  }


  export type InboxAvgAggregateInputType = {
    id?: true
  }

  export type InboxSumAggregateInputType = {
    id?: true
  }

  export type InboxMinAggregateInputType = {
    id?: true
    isGroup?: true
    name?: true
    createdAt?: true
    lastMessageAt?: true
  }

  export type InboxMaxAggregateInputType = {
    id?: true
    isGroup?: true
    name?: true
    createdAt?: true
    lastMessageAt?: true
  }

  export type InboxCountAggregateInputType = {
    id?: true
    isGroup?: true
    name?: true
    createdAt?: true
    lastMessageAt?: true
    _all?: true
  }

  export type InboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inbox to aggregate.
     */
    where?: InboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inboxes to fetch.
     */
    orderBy?: InboxOrderByWithRelationInput | InboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inboxes
    **/
    _count?: true | InboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InboxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InboxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InboxMaxAggregateInputType
  }

  export type GetInboxAggregateType<T extends InboxAggregateArgs> = {
        [P in keyof T & keyof AggregateInbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInbox[P]>
      : GetScalarType<T[P], AggregateInbox[P]>
  }




  export type InboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboxWhereInput
    orderBy?: InboxOrderByWithAggregationInput | InboxOrderByWithAggregationInput[]
    by: InboxScalarFieldEnum[] | InboxScalarFieldEnum
    having?: InboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InboxCountAggregateInputType | true
    _avg?: InboxAvgAggregateInputType
    _sum?: InboxSumAggregateInputType
    _min?: InboxMinAggregateInputType
    _max?: InboxMaxAggregateInputType
  }

  export type InboxGroupByOutputType = {
    id: number
    isGroup: boolean
    name: string | null
    createdAt: Date
    lastMessageAt: Date | null
    _count: InboxCountAggregateOutputType | null
    _avg: InboxAvgAggregateOutputType | null
    _sum: InboxSumAggregateOutputType | null
    _min: InboxMinAggregateOutputType | null
    _max: InboxMaxAggregateOutputType | null
  }

  type GetInboxGroupByPayload<T extends InboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InboxGroupByOutputType[P]>
            : GetScalarType<T[P], InboxGroupByOutputType[P]>
        }
      >
    >


  export type InboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isGroup?: boolean
    name?: boolean
    createdAt?: boolean
    lastMessageAt?: boolean
    messages?: boolean | Inbox$messagesArgs<ExtArgs>
    members?: boolean | Inbox$membersArgs<ExtArgs>
    _count?: boolean | InboxCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inbox"]>

  export type InboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isGroup?: boolean
    name?: boolean
    createdAt?: boolean
    lastMessageAt?: boolean
  }, ExtArgs["result"]["inbox"]>

  export type InboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isGroup?: boolean
    name?: boolean
    createdAt?: boolean
    lastMessageAt?: boolean
  }, ExtArgs["result"]["inbox"]>

  export type InboxSelectScalar = {
    id?: boolean
    isGroup?: boolean
    name?: boolean
    createdAt?: boolean
    lastMessageAt?: boolean
  }

  export type InboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isGroup" | "name" | "createdAt" | "lastMessageAt", ExtArgs["result"]["inbox"]>
  export type InboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Inbox$messagesArgs<ExtArgs>
    members?: boolean | Inbox$membersArgs<ExtArgs>
    _count?: boolean | InboxCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inbox"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      members: Prisma.$InboxMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isGroup: boolean
      name: string | null
      createdAt: Date
      lastMessageAt: Date | null
    }, ExtArgs["result"]["inbox"]>
    composites: {}
  }

  type InboxGetPayload<S extends boolean | null | undefined | InboxDefaultArgs> = $Result.GetResult<Prisma.$InboxPayload, S>

  type InboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InboxCountAggregateInputType | true
    }

  export interface InboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inbox'], meta: { name: 'Inbox' } }
    /**
     * Find zero or one Inbox that matches the filter.
     * @param {InboxFindUniqueArgs} args - Arguments to find a Inbox
     * @example
     * // Get one Inbox
     * const inbox = await prisma.inbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InboxFindUniqueArgs>(args: SelectSubset<T, InboxFindUniqueArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InboxFindUniqueOrThrowArgs} args - Arguments to find a Inbox
     * @example
     * // Get one Inbox
     * const inbox = await prisma.inbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InboxFindUniqueOrThrowArgs>(args: SelectSubset<T, InboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxFindFirstArgs} args - Arguments to find a Inbox
     * @example
     * // Get one Inbox
     * const inbox = await prisma.inbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InboxFindFirstArgs>(args?: SelectSubset<T, InboxFindFirstArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxFindFirstOrThrowArgs} args - Arguments to find a Inbox
     * @example
     * // Get one Inbox
     * const inbox = await prisma.inbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InboxFindFirstOrThrowArgs>(args?: SelectSubset<T, InboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inboxes
     * const inboxes = await prisma.inbox.findMany()
     * 
     * // Get first 10 Inboxes
     * const inboxes = await prisma.inbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inboxWithIdOnly = await prisma.inbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InboxFindManyArgs>(args?: SelectSubset<T, InboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inbox.
     * @param {InboxCreateArgs} args - Arguments to create a Inbox.
     * @example
     * // Create one Inbox
     * const Inbox = await prisma.inbox.create({
     *   data: {
     *     // ... data to create a Inbox
     *   }
     * })
     * 
     */
    create<T extends InboxCreateArgs>(args: SelectSubset<T, InboxCreateArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inboxes.
     * @param {InboxCreateManyArgs} args - Arguments to create many Inboxes.
     * @example
     * // Create many Inboxes
     * const inbox = await prisma.inbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InboxCreateManyArgs>(args?: SelectSubset<T, InboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inboxes and returns the data saved in the database.
     * @param {InboxCreateManyAndReturnArgs} args - Arguments to create many Inboxes.
     * @example
     * // Create many Inboxes
     * const inbox = await prisma.inbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inboxes and only return the `id`
     * const inboxWithIdOnly = await prisma.inbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InboxCreateManyAndReturnArgs>(args?: SelectSubset<T, InboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inbox.
     * @param {InboxDeleteArgs} args - Arguments to delete one Inbox.
     * @example
     * // Delete one Inbox
     * const Inbox = await prisma.inbox.delete({
     *   where: {
     *     // ... filter to delete one Inbox
     *   }
     * })
     * 
     */
    delete<T extends InboxDeleteArgs>(args: SelectSubset<T, InboxDeleteArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inbox.
     * @param {InboxUpdateArgs} args - Arguments to update one Inbox.
     * @example
     * // Update one Inbox
     * const inbox = await prisma.inbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InboxUpdateArgs>(args: SelectSubset<T, InboxUpdateArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inboxes.
     * @param {InboxDeleteManyArgs} args - Arguments to filter Inboxes to delete.
     * @example
     * // Delete a few Inboxes
     * const { count } = await prisma.inbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InboxDeleteManyArgs>(args?: SelectSubset<T, InboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inboxes
     * const inbox = await prisma.inbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InboxUpdateManyArgs>(args: SelectSubset<T, InboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inboxes and returns the data updated in the database.
     * @param {InboxUpdateManyAndReturnArgs} args - Arguments to update many Inboxes.
     * @example
     * // Update many Inboxes
     * const inbox = await prisma.inbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inboxes and only return the `id`
     * const inboxWithIdOnly = await prisma.inbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InboxUpdateManyAndReturnArgs>(args: SelectSubset<T, InboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inbox.
     * @param {InboxUpsertArgs} args - Arguments to update or create a Inbox.
     * @example
     * // Update or create a Inbox
     * const inbox = await prisma.inbox.upsert({
     *   create: {
     *     // ... data to create a Inbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inbox we want to update
     *   }
     * })
     */
    upsert<T extends InboxUpsertArgs>(args: SelectSubset<T, InboxUpsertArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxCountArgs} args - Arguments to filter Inboxes to count.
     * @example
     * // Count the number of Inboxes
     * const count = await prisma.inbox.count({
     *   where: {
     *     // ... the filter for the Inboxes we want to count
     *   }
     * })
    **/
    count<T extends InboxCountArgs>(
      args?: Subset<T, InboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InboxAggregateArgs>(args: Subset<T, InboxAggregateArgs>): Prisma.PrismaPromise<GetInboxAggregateType<T>>

    /**
     * Group by Inbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InboxGroupByArgs['orderBy'] }
        : { orderBy?: InboxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inbox model
   */
  readonly fields: InboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Inbox$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Inbox$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Inbox$membersArgs<ExtArgs> = {}>(args?: Subset<T, Inbox$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inbox model
   */
  interface InboxFieldRefs {
    readonly id: FieldRef<"Inbox", 'Int'>
    readonly isGroup: FieldRef<"Inbox", 'Boolean'>
    readonly name: FieldRef<"Inbox", 'String'>
    readonly createdAt: FieldRef<"Inbox", 'DateTime'>
    readonly lastMessageAt: FieldRef<"Inbox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inbox findUnique
   */
  export type InboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxInclude<ExtArgs> | null
    /**
     * Filter, which Inbox to fetch.
     */
    where: InboxWhereUniqueInput
  }

  /**
   * Inbox findUniqueOrThrow
   */
  export type InboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxInclude<ExtArgs> | null
    /**
     * Filter, which Inbox to fetch.
     */
    where: InboxWhereUniqueInput
  }

  /**
   * Inbox findFirst
   */
  export type InboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxInclude<ExtArgs> | null
    /**
     * Filter, which Inbox to fetch.
     */
    where?: InboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inboxes to fetch.
     */
    orderBy?: InboxOrderByWithRelationInput | InboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inboxes.
     */
    cursor?: InboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inboxes.
     */
    distinct?: InboxScalarFieldEnum | InboxScalarFieldEnum[]
  }

  /**
   * Inbox findFirstOrThrow
   */
  export type InboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxInclude<ExtArgs> | null
    /**
     * Filter, which Inbox to fetch.
     */
    where?: InboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inboxes to fetch.
     */
    orderBy?: InboxOrderByWithRelationInput | InboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inboxes.
     */
    cursor?: InboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inboxes.
     */
    distinct?: InboxScalarFieldEnum | InboxScalarFieldEnum[]
  }

  /**
   * Inbox findMany
   */
  export type InboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxInclude<ExtArgs> | null
    /**
     * Filter, which Inboxes to fetch.
     */
    where?: InboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inboxes to fetch.
     */
    orderBy?: InboxOrderByWithRelationInput | InboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inboxes.
     */
    cursor?: InboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inboxes.
     */
    skip?: number
    distinct?: InboxScalarFieldEnum | InboxScalarFieldEnum[]
  }

  /**
   * Inbox create
   */
  export type InboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxInclude<ExtArgs> | null
    /**
     * The data needed to create a Inbox.
     */
    data?: XOR<InboxCreateInput, InboxUncheckedCreateInput>
  }

  /**
   * Inbox createMany
   */
  export type InboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inboxes.
     */
    data: InboxCreateManyInput | InboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inbox createManyAndReturn
   */
  export type InboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * The data used to create many Inboxes.
     */
    data: InboxCreateManyInput | InboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inbox update
   */
  export type InboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxInclude<ExtArgs> | null
    /**
     * The data needed to update a Inbox.
     */
    data: XOR<InboxUpdateInput, InboxUncheckedUpdateInput>
    /**
     * Choose, which Inbox to update.
     */
    where: InboxWhereUniqueInput
  }

  /**
   * Inbox updateMany
   */
  export type InboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inboxes.
     */
    data: XOR<InboxUpdateManyMutationInput, InboxUncheckedUpdateManyInput>
    /**
     * Filter which Inboxes to update
     */
    where?: InboxWhereInput
    /**
     * Limit how many Inboxes to update.
     */
    limit?: number
  }

  /**
   * Inbox updateManyAndReturn
   */
  export type InboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * The data used to update Inboxes.
     */
    data: XOR<InboxUpdateManyMutationInput, InboxUncheckedUpdateManyInput>
    /**
     * Filter which Inboxes to update
     */
    where?: InboxWhereInput
    /**
     * Limit how many Inboxes to update.
     */
    limit?: number
  }

  /**
   * Inbox upsert
   */
  export type InboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxInclude<ExtArgs> | null
    /**
     * The filter to search for the Inbox to update in case it exists.
     */
    where: InboxWhereUniqueInput
    /**
     * In case the Inbox found by the `where` argument doesn't exist, create a new Inbox with this data.
     */
    create: XOR<InboxCreateInput, InboxUncheckedCreateInput>
    /**
     * In case the Inbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InboxUpdateInput, InboxUncheckedUpdateInput>
  }

  /**
   * Inbox delete
   */
  export type InboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxInclude<ExtArgs> | null
    /**
     * Filter which Inbox to delete.
     */
    where: InboxWhereUniqueInput
  }

  /**
   * Inbox deleteMany
   */
  export type InboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inboxes to delete
     */
    where?: InboxWhereInput
    /**
     * Limit how many Inboxes to delete.
     */
    limit?: number
  }

  /**
   * Inbox.messages
   */
  export type Inbox$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Inbox.members
   */
  export type Inbox$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberInclude<ExtArgs> | null
    where?: InboxMemberWhereInput
    orderBy?: InboxMemberOrderByWithRelationInput | InboxMemberOrderByWithRelationInput[]
    cursor?: InboxMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InboxMemberScalarFieldEnum | InboxMemberScalarFieldEnum[]
  }

  /**
   * Inbox without action
   */
  export type InboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbox
     */
    select?: InboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbox
     */
    omit?: InboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxInclude<ExtArgs> | null
  }


  /**
   * Model InboxMember
   */

  export type AggregateInboxMember = {
    _count: InboxMemberCountAggregateOutputType | null
    _avg: InboxMemberAvgAggregateOutputType | null
    _sum: InboxMemberSumAggregateOutputType | null
    _min: InboxMemberMinAggregateOutputType | null
    _max: InboxMemberMaxAggregateOutputType | null
  }

  export type InboxMemberAvgAggregateOutputType = {
    id: number | null
    inboxId: number | null
    userId: number | null
  }

  export type InboxMemberSumAggregateOutputType = {
    id: number | null
    inboxId: number | null
    userId: number | null
  }

  export type InboxMemberMinAggregateOutputType = {
    id: number | null
    inboxId: number | null
    userId: number | null
    joinedAt: Date | null
  }

  export type InboxMemberMaxAggregateOutputType = {
    id: number | null
    inboxId: number | null
    userId: number | null
    joinedAt: Date | null
  }

  export type InboxMemberCountAggregateOutputType = {
    id: number
    inboxId: number
    userId: number
    joinedAt: number
    _all: number
  }


  export type InboxMemberAvgAggregateInputType = {
    id?: true
    inboxId?: true
    userId?: true
  }

  export type InboxMemberSumAggregateInputType = {
    id?: true
    inboxId?: true
    userId?: true
  }

  export type InboxMemberMinAggregateInputType = {
    id?: true
    inboxId?: true
    userId?: true
    joinedAt?: true
  }

  export type InboxMemberMaxAggregateInputType = {
    id?: true
    inboxId?: true
    userId?: true
    joinedAt?: true
  }

  export type InboxMemberCountAggregateInputType = {
    id?: true
    inboxId?: true
    userId?: true
    joinedAt?: true
    _all?: true
  }

  export type InboxMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InboxMember to aggregate.
     */
    where?: InboxMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboxMembers to fetch.
     */
    orderBy?: InboxMemberOrderByWithRelationInput | InboxMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InboxMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboxMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboxMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InboxMembers
    **/
    _count?: true | InboxMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InboxMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InboxMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InboxMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InboxMemberMaxAggregateInputType
  }

  export type GetInboxMemberAggregateType<T extends InboxMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateInboxMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInboxMember[P]>
      : GetScalarType<T[P], AggregateInboxMember[P]>
  }




  export type InboxMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboxMemberWhereInput
    orderBy?: InboxMemberOrderByWithAggregationInput | InboxMemberOrderByWithAggregationInput[]
    by: InboxMemberScalarFieldEnum[] | InboxMemberScalarFieldEnum
    having?: InboxMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InboxMemberCountAggregateInputType | true
    _avg?: InboxMemberAvgAggregateInputType
    _sum?: InboxMemberSumAggregateInputType
    _min?: InboxMemberMinAggregateInputType
    _max?: InboxMemberMaxAggregateInputType
  }

  export type InboxMemberGroupByOutputType = {
    id: number
    inboxId: number
    userId: number
    joinedAt: Date
    _count: InboxMemberCountAggregateOutputType | null
    _avg: InboxMemberAvgAggregateOutputType | null
    _sum: InboxMemberSumAggregateOutputType | null
    _min: InboxMemberMinAggregateOutputType | null
    _max: InboxMemberMaxAggregateOutputType | null
  }

  type GetInboxMemberGroupByPayload<T extends InboxMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InboxMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InboxMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InboxMemberGroupByOutputType[P]>
            : GetScalarType<T[P], InboxMemberGroupByOutputType[P]>
        }
      >
    >


  export type InboxMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inboxId?: boolean
    userId?: boolean
    joinedAt?: boolean
    inbox?: boolean | InboxDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inboxMember"]>

  export type InboxMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inboxId?: boolean
    userId?: boolean
    joinedAt?: boolean
    inbox?: boolean | InboxDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inboxMember"]>

  export type InboxMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inboxId?: boolean
    userId?: boolean
    joinedAt?: boolean
    inbox?: boolean | InboxDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inboxMember"]>

  export type InboxMemberSelectScalar = {
    id?: boolean
    inboxId?: boolean
    userId?: boolean
    joinedAt?: boolean
  }

  export type InboxMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inboxId" | "userId" | "joinedAt", ExtArgs["result"]["inboxMember"]>
  export type InboxMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inbox?: boolean | InboxDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InboxMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inbox?: boolean | InboxDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InboxMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inbox?: boolean | InboxDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InboxMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InboxMember"
    objects: {
      inbox: Prisma.$InboxPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inboxId: number
      userId: number
      joinedAt: Date
    }, ExtArgs["result"]["inboxMember"]>
    composites: {}
  }

  type InboxMemberGetPayload<S extends boolean | null | undefined | InboxMemberDefaultArgs> = $Result.GetResult<Prisma.$InboxMemberPayload, S>

  type InboxMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InboxMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InboxMemberCountAggregateInputType | true
    }

  export interface InboxMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InboxMember'], meta: { name: 'InboxMember' } }
    /**
     * Find zero or one InboxMember that matches the filter.
     * @param {InboxMemberFindUniqueArgs} args - Arguments to find a InboxMember
     * @example
     * // Get one InboxMember
     * const inboxMember = await prisma.inboxMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InboxMemberFindUniqueArgs>(args: SelectSubset<T, InboxMemberFindUniqueArgs<ExtArgs>>): Prisma__InboxMemberClient<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InboxMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InboxMemberFindUniqueOrThrowArgs} args - Arguments to find a InboxMember
     * @example
     * // Get one InboxMember
     * const inboxMember = await prisma.inboxMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InboxMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, InboxMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InboxMemberClient<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InboxMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMemberFindFirstArgs} args - Arguments to find a InboxMember
     * @example
     * // Get one InboxMember
     * const inboxMember = await prisma.inboxMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InboxMemberFindFirstArgs>(args?: SelectSubset<T, InboxMemberFindFirstArgs<ExtArgs>>): Prisma__InboxMemberClient<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InboxMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMemberFindFirstOrThrowArgs} args - Arguments to find a InboxMember
     * @example
     * // Get one InboxMember
     * const inboxMember = await prisma.inboxMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InboxMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, InboxMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__InboxMemberClient<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InboxMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InboxMembers
     * const inboxMembers = await prisma.inboxMember.findMany()
     * 
     * // Get first 10 InboxMembers
     * const inboxMembers = await prisma.inboxMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inboxMemberWithIdOnly = await prisma.inboxMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InboxMemberFindManyArgs>(args?: SelectSubset<T, InboxMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InboxMember.
     * @param {InboxMemberCreateArgs} args - Arguments to create a InboxMember.
     * @example
     * // Create one InboxMember
     * const InboxMember = await prisma.inboxMember.create({
     *   data: {
     *     // ... data to create a InboxMember
     *   }
     * })
     * 
     */
    create<T extends InboxMemberCreateArgs>(args: SelectSubset<T, InboxMemberCreateArgs<ExtArgs>>): Prisma__InboxMemberClient<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InboxMembers.
     * @param {InboxMemberCreateManyArgs} args - Arguments to create many InboxMembers.
     * @example
     * // Create many InboxMembers
     * const inboxMember = await prisma.inboxMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InboxMemberCreateManyArgs>(args?: SelectSubset<T, InboxMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InboxMembers and returns the data saved in the database.
     * @param {InboxMemberCreateManyAndReturnArgs} args - Arguments to create many InboxMembers.
     * @example
     * // Create many InboxMembers
     * const inboxMember = await prisma.inboxMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InboxMembers and only return the `id`
     * const inboxMemberWithIdOnly = await prisma.inboxMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InboxMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, InboxMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InboxMember.
     * @param {InboxMemberDeleteArgs} args - Arguments to delete one InboxMember.
     * @example
     * // Delete one InboxMember
     * const InboxMember = await prisma.inboxMember.delete({
     *   where: {
     *     // ... filter to delete one InboxMember
     *   }
     * })
     * 
     */
    delete<T extends InboxMemberDeleteArgs>(args: SelectSubset<T, InboxMemberDeleteArgs<ExtArgs>>): Prisma__InboxMemberClient<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InboxMember.
     * @param {InboxMemberUpdateArgs} args - Arguments to update one InboxMember.
     * @example
     * // Update one InboxMember
     * const inboxMember = await prisma.inboxMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InboxMemberUpdateArgs>(args: SelectSubset<T, InboxMemberUpdateArgs<ExtArgs>>): Prisma__InboxMemberClient<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InboxMembers.
     * @param {InboxMemberDeleteManyArgs} args - Arguments to filter InboxMembers to delete.
     * @example
     * // Delete a few InboxMembers
     * const { count } = await prisma.inboxMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InboxMemberDeleteManyArgs>(args?: SelectSubset<T, InboxMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InboxMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InboxMembers
     * const inboxMember = await prisma.inboxMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InboxMemberUpdateManyArgs>(args: SelectSubset<T, InboxMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InboxMembers and returns the data updated in the database.
     * @param {InboxMemberUpdateManyAndReturnArgs} args - Arguments to update many InboxMembers.
     * @example
     * // Update many InboxMembers
     * const inboxMember = await prisma.inboxMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InboxMembers and only return the `id`
     * const inboxMemberWithIdOnly = await prisma.inboxMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InboxMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, InboxMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InboxMember.
     * @param {InboxMemberUpsertArgs} args - Arguments to update or create a InboxMember.
     * @example
     * // Update or create a InboxMember
     * const inboxMember = await prisma.inboxMember.upsert({
     *   create: {
     *     // ... data to create a InboxMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InboxMember we want to update
     *   }
     * })
     */
    upsert<T extends InboxMemberUpsertArgs>(args: SelectSubset<T, InboxMemberUpsertArgs<ExtArgs>>): Prisma__InboxMemberClient<$Result.GetResult<Prisma.$InboxMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InboxMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMemberCountArgs} args - Arguments to filter InboxMembers to count.
     * @example
     * // Count the number of InboxMembers
     * const count = await prisma.inboxMember.count({
     *   where: {
     *     // ... the filter for the InboxMembers we want to count
     *   }
     * })
    **/
    count<T extends InboxMemberCountArgs>(
      args?: Subset<T, InboxMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InboxMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InboxMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InboxMemberAggregateArgs>(args: Subset<T, InboxMemberAggregateArgs>): Prisma.PrismaPromise<GetInboxMemberAggregateType<T>>

    /**
     * Group by InboxMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InboxMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InboxMemberGroupByArgs['orderBy'] }
        : { orderBy?: InboxMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InboxMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInboxMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InboxMember model
   */
  readonly fields: InboxMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InboxMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InboxMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inbox<T extends InboxDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InboxDefaultArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InboxMember model
   */
  interface InboxMemberFieldRefs {
    readonly id: FieldRef<"InboxMember", 'Int'>
    readonly inboxId: FieldRef<"InboxMember", 'Int'>
    readonly userId: FieldRef<"InboxMember", 'Int'>
    readonly joinedAt: FieldRef<"InboxMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InboxMember findUnique
   */
  export type InboxMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberInclude<ExtArgs> | null
    /**
     * Filter, which InboxMember to fetch.
     */
    where: InboxMemberWhereUniqueInput
  }

  /**
   * InboxMember findUniqueOrThrow
   */
  export type InboxMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberInclude<ExtArgs> | null
    /**
     * Filter, which InboxMember to fetch.
     */
    where: InboxMemberWhereUniqueInput
  }

  /**
   * InboxMember findFirst
   */
  export type InboxMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberInclude<ExtArgs> | null
    /**
     * Filter, which InboxMember to fetch.
     */
    where?: InboxMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboxMembers to fetch.
     */
    orderBy?: InboxMemberOrderByWithRelationInput | InboxMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InboxMembers.
     */
    cursor?: InboxMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboxMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboxMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InboxMembers.
     */
    distinct?: InboxMemberScalarFieldEnum | InboxMemberScalarFieldEnum[]
  }

  /**
   * InboxMember findFirstOrThrow
   */
  export type InboxMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberInclude<ExtArgs> | null
    /**
     * Filter, which InboxMember to fetch.
     */
    where?: InboxMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboxMembers to fetch.
     */
    orderBy?: InboxMemberOrderByWithRelationInput | InboxMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InboxMembers.
     */
    cursor?: InboxMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboxMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboxMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InboxMembers.
     */
    distinct?: InboxMemberScalarFieldEnum | InboxMemberScalarFieldEnum[]
  }

  /**
   * InboxMember findMany
   */
  export type InboxMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberInclude<ExtArgs> | null
    /**
     * Filter, which InboxMembers to fetch.
     */
    where?: InboxMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboxMembers to fetch.
     */
    orderBy?: InboxMemberOrderByWithRelationInput | InboxMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InboxMembers.
     */
    cursor?: InboxMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboxMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboxMembers.
     */
    skip?: number
    distinct?: InboxMemberScalarFieldEnum | InboxMemberScalarFieldEnum[]
  }

  /**
   * InboxMember create
   */
  export type InboxMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a InboxMember.
     */
    data: XOR<InboxMemberCreateInput, InboxMemberUncheckedCreateInput>
  }

  /**
   * InboxMember createMany
   */
  export type InboxMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InboxMembers.
     */
    data: InboxMemberCreateManyInput | InboxMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InboxMember createManyAndReturn
   */
  export type InboxMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * The data used to create many InboxMembers.
     */
    data: InboxMemberCreateManyInput | InboxMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InboxMember update
   */
  export type InboxMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a InboxMember.
     */
    data: XOR<InboxMemberUpdateInput, InboxMemberUncheckedUpdateInput>
    /**
     * Choose, which InboxMember to update.
     */
    where: InboxMemberWhereUniqueInput
  }

  /**
   * InboxMember updateMany
   */
  export type InboxMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InboxMembers.
     */
    data: XOR<InboxMemberUpdateManyMutationInput, InboxMemberUncheckedUpdateManyInput>
    /**
     * Filter which InboxMembers to update
     */
    where?: InboxMemberWhereInput
    /**
     * Limit how many InboxMembers to update.
     */
    limit?: number
  }

  /**
   * InboxMember updateManyAndReturn
   */
  export type InboxMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * The data used to update InboxMembers.
     */
    data: XOR<InboxMemberUpdateManyMutationInput, InboxMemberUncheckedUpdateManyInput>
    /**
     * Filter which InboxMembers to update
     */
    where?: InboxMemberWhereInput
    /**
     * Limit how many InboxMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InboxMember upsert
   */
  export type InboxMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the InboxMember to update in case it exists.
     */
    where: InboxMemberWhereUniqueInput
    /**
     * In case the InboxMember found by the `where` argument doesn't exist, create a new InboxMember with this data.
     */
    create: XOR<InboxMemberCreateInput, InboxMemberUncheckedCreateInput>
    /**
     * In case the InboxMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InboxMemberUpdateInput, InboxMemberUncheckedUpdateInput>
  }

  /**
   * InboxMember delete
   */
  export type InboxMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberInclude<ExtArgs> | null
    /**
     * Filter which InboxMember to delete.
     */
    where: InboxMemberWhereUniqueInput
  }

  /**
   * InboxMember deleteMany
   */
  export type InboxMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InboxMembers to delete
     */
    where?: InboxMemberWhereInput
    /**
     * Limit how many InboxMembers to delete.
     */
    limit?: number
  }

  /**
   * InboxMember without action
   */
  export type InboxMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMember
     */
    select?: InboxMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMember
     */
    omit?: InboxMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboxMemberInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    inboxId: number | null
    senderId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    inboxId: number | null
    senderId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    inboxId: number | null
    senderId: number | null
    content: string | null
    mediaUrl: string | null
    mediaType: string | null
    sentAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    inboxId: number | null
    senderId: number | null
    content: string | null
    mediaUrl: string | null
    mediaType: string | null
    sentAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    inboxId: number
    senderId: number
    content: number
    mediaUrl: number
    mediaType: number
    sentAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    inboxId?: true
    senderId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    inboxId?: true
    senderId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    inboxId?: true
    senderId?: true
    content?: true
    mediaUrl?: true
    mediaType?: true
    sentAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    inboxId?: true
    senderId?: true
    content?: true
    mediaUrl?: true
    mediaType?: true
    sentAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    inboxId?: true
    senderId?: true
    content?: true
    mediaUrl?: true
    mediaType?: true
    sentAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    inboxId: number
    senderId: number | null
    content: string | null
    mediaUrl: string | null
    mediaType: string | null
    sentAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inboxId?: boolean
    senderId?: boolean
    content?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    sentAt?: boolean
    inbox?: boolean | InboxDefaultArgs<ExtArgs>
    sender?: boolean | Message$senderArgs<ExtArgs>
    reads?: boolean | Message$readsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inboxId?: boolean
    senderId?: boolean
    content?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    sentAt?: boolean
    inbox?: boolean | InboxDefaultArgs<ExtArgs>
    sender?: boolean | Message$senderArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inboxId?: boolean
    senderId?: boolean
    content?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    sentAt?: boolean
    inbox?: boolean | InboxDefaultArgs<ExtArgs>
    sender?: boolean | Message$senderArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    inboxId?: boolean
    senderId?: boolean
    content?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    sentAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inboxId" | "senderId" | "content" | "mediaUrl" | "mediaType" | "sentAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inbox?: boolean | InboxDefaultArgs<ExtArgs>
    sender?: boolean | Message$senderArgs<ExtArgs>
    reads?: boolean | Message$readsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inbox?: boolean | InboxDefaultArgs<ExtArgs>
    sender?: boolean | Message$senderArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inbox?: boolean | InboxDefaultArgs<ExtArgs>
    sender?: boolean | Message$senderArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      inbox: Prisma.$InboxPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs> | null
      reads: Prisma.$MessageReadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inboxId: number
      senderId: number | null
      content: string | null
      mediaUrl: string | null
      mediaType: string | null
      sentAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inbox<T extends InboxDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InboxDefaultArgs<ExtArgs>>): Prisma__InboxClient<$Result.GetResult<Prisma.$InboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends Message$senderArgs<ExtArgs> = {}>(args?: Subset<T, Message$senderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reads<T extends Message$readsArgs<ExtArgs> = {}>(args?: Subset<T, Message$readsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly inboxId: FieldRef<"Message", 'Int'>
    readonly senderId: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly mediaUrl: FieldRef<"Message", 'String'>
    readonly mediaType: FieldRef<"Message", 'String'>
    readonly sentAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.sender
   */
  export type Message$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Message.reads
   */
  export type Message$readsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadInclude<ExtArgs> | null
    where?: MessageReadWhereInput
    orderBy?: MessageReadOrderByWithRelationInput | MessageReadOrderByWithRelationInput[]
    cursor?: MessageReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReadScalarFieldEnum | MessageReadScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model MessageRead
   */

  export type AggregateMessageRead = {
    _count: MessageReadCountAggregateOutputType | null
    _avg: MessageReadAvgAggregateOutputType | null
    _sum: MessageReadSumAggregateOutputType | null
    _min: MessageReadMinAggregateOutputType | null
    _max: MessageReadMaxAggregateOutputType | null
  }

  export type MessageReadAvgAggregateOutputType = {
    id: number | null
    messageId: number | null
    userId: number | null
  }

  export type MessageReadSumAggregateOutputType = {
    id: number | null
    messageId: number | null
    userId: number | null
  }

  export type MessageReadMinAggregateOutputType = {
    id: number | null
    messageId: number | null
    userId: number | null
    readAt: Date | null
  }

  export type MessageReadMaxAggregateOutputType = {
    id: number | null
    messageId: number | null
    userId: number | null
    readAt: Date | null
  }

  export type MessageReadCountAggregateOutputType = {
    id: number
    messageId: number
    userId: number
    readAt: number
    _all: number
  }


  export type MessageReadAvgAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
  }

  export type MessageReadSumAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
  }

  export type MessageReadMinAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    readAt?: true
  }

  export type MessageReadMaxAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    readAt?: true
  }

  export type MessageReadCountAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    readAt?: true
    _all?: true
  }

  export type MessageReadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageRead to aggregate.
     */
    where?: MessageReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReads to fetch.
     */
    orderBy?: MessageReadOrderByWithRelationInput | MessageReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageReads
    **/
    _count?: true | MessageReadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageReadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageReadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageReadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageReadMaxAggregateInputType
  }

  export type GetMessageReadAggregateType<T extends MessageReadAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageRead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageRead[P]>
      : GetScalarType<T[P], AggregateMessageRead[P]>
  }




  export type MessageReadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReadWhereInput
    orderBy?: MessageReadOrderByWithAggregationInput | MessageReadOrderByWithAggregationInput[]
    by: MessageReadScalarFieldEnum[] | MessageReadScalarFieldEnum
    having?: MessageReadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageReadCountAggregateInputType | true
    _avg?: MessageReadAvgAggregateInputType
    _sum?: MessageReadSumAggregateInputType
    _min?: MessageReadMinAggregateInputType
    _max?: MessageReadMaxAggregateInputType
  }

  export type MessageReadGroupByOutputType = {
    id: number
    messageId: number
    userId: number
    readAt: Date
    _count: MessageReadCountAggregateOutputType | null
    _avg: MessageReadAvgAggregateOutputType | null
    _sum: MessageReadSumAggregateOutputType | null
    _min: MessageReadMinAggregateOutputType | null
    _max: MessageReadMaxAggregateOutputType | null
  }

  type GetMessageReadGroupByPayload<T extends MessageReadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageReadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageReadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageReadGroupByOutputType[P]>
            : GetScalarType<T[P], MessageReadGroupByOutputType[P]>
        }
      >
    >


  export type MessageReadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    readAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageRead"]>

  export type MessageReadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    readAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageRead"]>

  export type MessageReadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    readAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageRead"]>

  export type MessageReadSelectScalar = {
    id?: boolean
    messageId?: boolean
    userId?: boolean
    readAt?: boolean
  }

  export type MessageReadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageId" | "userId" | "readAt", ExtArgs["result"]["messageRead"]>
  export type MessageReadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageReadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageReadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessageReadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageRead"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      messageId: number
      userId: number
      readAt: Date
    }, ExtArgs["result"]["messageRead"]>
    composites: {}
  }

  type MessageReadGetPayload<S extends boolean | null | undefined | MessageReadDefaultArgs> = $Result.GetResult<Prisma.$MessageReadPayload, S>

  type MessageReadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageReadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageReadCountAggregateInputType | true
    }

  export interface MessageReadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageRead'], meta: { name: 'MessageRead' } }
    /**
     * Find zero or one MessageRead that matches the filter.
     * @param {MessageReadFindUniqueArgs} args - Arguments to find a MessageRead
     * @example
     * // Get one MessageRead
     * const messageRead = await prisma.messageRead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageReadFindUniqueArgs>(args: SelectSubset<T, MessageReadFindUniqueArgs<ExtArgs>>): Prisma__MessageReadClient<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageRead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageReadFindUniqueOrThrowArgs} args - Arguments to find a MessageRead
     * @example
     * // Get one MessageRead
     * const messageRead = await prisma.messageRead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageReadFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageReadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageReadClient<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageRead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReadFindFirstArgs} args - Arguments to find a MessageRead
     * @example
     * // Get one MessageRead
     * const messageRead = await prisma.messageRead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageReadFindFirstArgs>(args?: SelectSubset<T, MessageReadFindFirstArgs<ExtArgs>>): Prisma__MessageReadClient<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageRead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReadFindFirstOrThrowArgs} args - Arguments to find a MessageRead
     * @example
     * // Get one MessageRead
     * const messageRead = await prisma.messageRead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageReadFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageReadFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageReadClient<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageReads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageReads
     * const messageReads = await prisma.messageRead.findMany()
     * 
     * // Get first 10 MessageReads
     * const messageReads = await prisma.messageRead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageReadWithIdOnly = await prisma.messageRead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageReadFindManyArgs>(args?: SelectSubset<T, MessageReadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageRead.
     * @param {MessageReadCreateArgs} args - Arguments to create a MessageRead.
     * @example
     * // Create one MessageRead
     * const MessageRead = await prisma.messageRead.create({
     *   data: {
     *     // ... data to create a MessageRead
     *   }
     * })
     * 
     */
    create<T extends MessageReadCreateArgs>(args: SelectSubset<T, MessageReadCreateArgs<ExtArgs>>): Prisma__MessageReadClient<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageReads.
     * @param {MessageReadCreateManyArgs} args - Arguments to create many MessageReads.
     * @example
     * // Create many MessageReads
     * const messageRead = await prisma.messageRead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageReadCreateManyArgs>(args?: SelectSubset<T, MessageReadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageReads and returns the data saved in the database.
     * @param {MessageReadCreateManyAndReturnArgs} args - Arguments to create many MessageReads.
     * @example
     * // Create many MessageReads
     * const messageRead = await prisma.messageRead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageReads and only return the `id`
     * const messageReadWithIdOnly = await prisma.messageRead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageReadCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageReadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageRead.
     * @param {MessageReadDeleteArgs} args - Arguments to delete one MessageRead.
     * @example
     * // Delete one MessageRead
     * const MessageRead = await prisma.messageRead.delete({
     *   where: {
     *     // ... filter to delete one MessageRead
     *   }
     * })
     * 
     */
    delete<T extends MessageReadDeleteArgs>(args: SelectSubset<T, MessageReadDeleteArgs<ExtArgs>>): Prisma__MessageReadClient<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageRead.
     * @param {MessageReadUpdateArgs} args - Arguments to update one MessageRead.
     * @example
     * // Update one MessageRead
     * const messageRead = await prisma.messageRead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageReadUpdateArgs>(args: SelectSubset<T, MessageReadUpdateArgs<ExtArgs>>): Prisma__MessageReadClient<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageReads.
     * @param {MessageReadDeleteManyArgs} args - Arguments to filter MessageReads to delete.
     * @example
     * // Delete a few MessageReads
     * const { count } = await prisma.messageRead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageReadDeleteManyArgs>(args?: SelectSubset<T, MessageReadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageReads
     * const messageRead = await prisma.messageRead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageReadUpdateManyArgs>(args: SelectSubset<T, MessageReadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageReads and returns the data updated in the database.
     * @param {MessageReadUpdateManyAndReturnArgs} args - Arguments to update many MessageReads.
     * @example
     * // Update many MessageReads
     * const messageRead = await prisma.messageRead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageReads and only return the `id`
     * const messageReadWithIdOnly = await prisma.messageRead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageReadUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageReadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageRead.
     * @param {MessageReadUpsertArgs} args - Arguments to update or create a MessageRead.
     * @example
     * // Update or create a MessageRead
     * const messageRead = await prisma.messageRead.upsert({
     *   create: {
     *     // ... data to create a MessageRead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageRead we want to update
     *   }
     * })
     */
    upsert<T extends MessageReadUpsertArgs>(args: SelectSubset<T, MessageReadUpsertArgs<ExtArgs>>): Prisma__MessageReadClient<$Result.GetResult<Prisma.$MessageReadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReadCountArgs} args - Arguments to filter MessageReads to count.
     * @example
     * // Count the number of MessageReads
     * const count = await prisma.messageRead.count({
     *   where: {
     *     // ... the filter for the MessageReads we want to count
     *   }
     * })
    **/
    count<T extends MessageReadCountArgs>(
      args?: Subset<T, MessageReadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageReadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageReadAggregateArgs>(args: Subset<T, MessageReadAggregateArgs>): Prisma.PrismaPromise<GetMessageReadAggregateType<T>>

    /**
     * Group by MessageRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageReadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageReadGroupByArgs['orderBy'] }
        : { orderBy?: MessageReadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageReadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageReadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageRead model
   */
  readonly fields: MessageReadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageRead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageReadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageRead model
   */
  interface MessageReadFieldRefs {
    readonly id: FieldRef<"MessageRead", 'Int'>
    readonly messageId: FieldRef<"MessageRead", 'Int'>
    readonly userId: FieldRef<"MessageRead", 'Int'>
    readonly readAt: FieldRef<"MessageRead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageRead findUnique
   */
  export type MessageReadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadInclude<ExtArgs> | null
    /**
     * Filter, which MessageRead to fetch.
     */
    where: MessageReadWhereUniqueInput
  }

  /**
   * MessageRead findUniqueOrThrow
   */
  export type MessageReadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadInclude<ExtArgs> | null
    /**
     * Filter, which MessageRead to fetch.
     */
    where: MessageReadWhereUniqueInput
  }

  /**
   * MessageRead findFirst
   */
  export type MessageReadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadInclude<ExtArgs> | null
    /**
     * Filter, which MessageRead to fetch.
     */
    where?: MessageReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReads to fetch.
     */
    orderBy?: MessageReadOrderByWithRelationInput | MessageReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageReads.
     */
    cursor?: MessageReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageReads.
     */
    distinct?: MessageReadScalarFieldEnum | MessageReadScalarFieldEnum[]
  }

  /**
   * MessageRead findFirstOrThrow
   */
  export type MessageReadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadInclude<ExtArgs> | null
    /**
     * Filter, which MessageRead to fetch.
     */
    where?: MessageReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReads to fetch.
     */
    orderBy?: MessageReadOrderByWithRelationInput | MessageReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageReads.
     */
    cursor?: MessageReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageReads.
     */
    distinct?: MessageReadScalarFieldEnum | MessageReadScalarFieldEnum[]
  }

  /**
   * MessageRead findMany
   */
  export type MessageReadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadInclude<ExtArgs> | null
    /**
     * Filter, which MessageReads to fetch.
     */
    where?: MessageReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReads to fetch.
     */
    orderBy?: MessageReadOrderByWithRelationInput | MessageReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageReads.
     */
    cursor?: MessageReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReads.
     */
    skip?: number
    distinct?: MessageReadScalarFieldEnum | MessageReadScalarFieldEnum[]
  }

  /**
   * MessageRead create
   */
  export type MessageReadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageRead.
     */
    data: XOR<MessageReadCreateInput, MessageReadUncheckedCreateInput>
  }

  /**
   * MessageRead createMany
   */
  export type MessageReadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageReads.
     */
    data: MessageReadCreateManyInput | MessageReadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageRead createManyAndReturn
   */
  export type MessageReadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * The data used to create many MessageReads.
     */
    data: MessageReadCreateManyInput | MessageReadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageRead update
   */
  export type MessageReadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageRead.
     */
    data: XOR<MessageReadUpdateInput, MessageReadUncheckedUpdateInput>
    /**
     * Choose, which MessageRead to update.
     */
    where: MessageReadWhereUniqueInput
  }

  /**
   * MessageRead updateMany
   */
  export type MessageReadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageReads.
     */
    data: XOR<MessageReadUpdateManyMutationInput, MessageReadUncheckedUpdateManyInput>
    /**
     * Filter which MessageReads to update
     */
    where?: MessageReadWhereInput
    /**
     * Limit how many MessageReads to update.
     */
    limit?: number
  }

  /**
   * MessageRead updateManyAndReturn
   */
  export type MessageReadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * The data used to update MessageReads.
     */
    data: XOR<MessageReadUpdateManyMutationInput, MessageReadUncheckedUpdateManyInput>
    /**
     * Filter which MessageReads to update
     */
    where?: MessageReadWhereInput
    /**
     * Limit how many MessageReads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageRead upsert
   */
  export type MessageReadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageRead to update in case it exists.
     */
    where: MessageReadWhereUniqueInput
    /**
     * In case the MessageRead found by the `where` argument doesn't exist, create a new MessageRead with this data.
     */
    create: XOR<MessageReadCreateInput, MessageReadUncheckedCreateInput>
    /**
     * In case the MessageRead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageReadUpdateInput, MessageReadUncheckedUpdateInput>
  }

  /**
   * MessageRead delete
   */
  export type MessageReadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadInclude<ExtArgs> | null
    /**
     * Filter which MessageRead to delete.
     */
    where: MessageReadWhereUniqueInput
  }

  /**
   * MessageRead deleteMany
   */
  export type MessageReadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageReads to delete
     */
    where?: MessageReadWhereInput
    /**
     * Limit how many MessageReads to delete.
     */
    limit?: number
  }

  /**
   * MessageRead without action
   */
  export type MessageReadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRead
     */
    select?: MessageReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRead
     */
    omit?: MessageReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReadInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    profilePicUrl: 'profilePicUrl',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InboxScalarFieldEnum: {
    id: 'id',
    isGroup: 'isGroup',
    name: 'name',
    createdAt: 'createdAt',
    lastMessageAt: 'lastMessageAt'
  };

  export type InboxScalarFieldEnum = (typeof InboxScalarFieldEnum)[keyof typeof InboxScalarFieldEnum]


  export const InboxMemberScalarFieldEnum: {
    id: 'id',
    inboxId: 'inboxId',
    userId: 'userId',
    joinedAt: 'joinedAt'
  };

  export type InboxMemberScalarFieldEnum = (typeof InboxMemberScalarFieldEnum)[keyof typeof InboxMemberScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    inboxId: 'inboxId',
    senderId: 'senderId',
    content: 'content',
    mediaUrl: 'mediaUrl',
    mediaType: 'mediaType',
    sentAt: 'sentAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MessageReadScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    userId: 'userId',
    readAt: 'readAt'
  };

  export type MessageReadScalarFieldEnum = (typeof MessageReadScalarFieldEnum)[keyof typeof MessageReadScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profilePicUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    messages?: MessageListRelationFilter
    reads?: MessageReadListRelationFilter
    inboxMemberships?: InboxMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePicUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    reads?: MessageReadOrderByRelationAggregateInput
    inboxMemberships?: InboxMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    profilePicUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    messages?: MessageListRelationFilter
    reads?: MessageReadListRelationFilter
    inboxMemberships?: InboxMemberListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePicUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profilePicUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InboxWhereInput = {
    AND?: InboxWhereInput | InboxWhereInput[]
    OR?: InboxWhereInput[]
    NOT?: InboxWhereInput | InboxWhereInput[]
    id?: IntFilter<"Inbox"> | number
    isGroup?: BoolFilter<"Inbox"> | boolean
    name?: StringNullableFilter<"Inbox"> | string | null
    createdAt?: DateTimeFilter<"Inbox"> | Date | string
    lastMessageAt?: DateTimeNullableFilter<"Inbox"> | Date | string | null
    messages?: MessageListRelationFilter
    members?: InboxMemberListRelationFilter
  }

  export type InboxOrderByWithRelationInput = {
    id?: SortOrder
    isGroup?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrderInput | SortOrder
    messages?: MessageOrderByRelationAggregateInput
    members?: InboxMemberOrderByRelationAggregateInput
  }

  export type InboxWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InboxWhereInput | InboxWhereInput[]
    OR?: InboxWhereInput[]
    NOT?: InboxWhereInput | InboxWhereInput[]
    isGroup?: BoolFilter<"Inbox"> | boolean
    name?: StringNullableFilter<"Inbox"> | string | null
    createdAt?: DateTimeFilter<"Inbox"> | Date | string
    lastMessageAt?: DateTimeNullableFilter<"Inbox"> | Date | string | null
    messages?: MessageListRelationFilter
    members?: InboxMemberListRelationFilter
  }, "id">

  export type InboxOrderByWithAggregationInput = {
    id?: SortOrder
    isGroup?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrderInput | SortOrder
    _count?: InboxCountOrderByAggregateInput
    _avg?: InboxAvgOrderByAggregateInput
    _max?: InboxMaxOrderByAggregateInput
    _min?: InboxMinOrderByAggregateInput
    _sum?: InboxSumOrderByAggregateInput
  }

  export type InboxScalarWhereWithAggregatesInput = {
    AND?: InboxScalarWhereWithAggregatesInput | InboxScalarWhereWithAggregatesInput[]
    OR?: InboxScalarWhereWithAggregatesInput[]
    NOT?: InboxScalarWhereWithAggregatesInput | InboxScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inbox"> | number
    isGroup?: BoolWithAggregatesFilter<"Inbox"> | boolean
    name?: StringNullableWithAggregatesFilter<"Inbox"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Inbox"> | Date | string
    lastMessageAt?: DateTimeNullableWithAggregatesFilter<"Inbox"> | Date | string | null
  }

  export type InboxMemberWhereInput = {
    AND?: InboxMemberWhereInput | InboxMemberWhereInput[]
    OR?: InboxMemberWhereInput[]
    NOT?: InboxMemberWhereInput | InboxMemberWhereInput[]
    id?: IntFilter<"InboxMember"> | number
    inboxId?: IntFilter<"InboxMember"> | number
    userId?: IntFilter<"InboxMember"> | number
    joinedAt?: DateTimeFilter<"InboxMember"> | Date | string
    inbox?: XOR<InboxScalarRelationFilter, InboxWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InboxMemberOrderByWithRelationInput = {
    id?: SortOrder
    inboxId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    inbox?: InboxOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type InboxMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    inboxId_userId?: InboxMemberInboxIdUserIdCompoundUniqueInput
    AND?: InboxMemberWhereInput | InboxMemberWhereInput[]
    OR?: InboxMemberWhereInput[]
    NOT?: InboxMemberWhereInput | InboxMemberWhereInput[]
    inboxId?: IntFilter<"InboxMember"> | number
    userId?: IntFilter<"InboxMember"> | number
    joinedAt?: DateTimeFilter<"InboxMember"> | Date | string
    inbox?: XOR<InboxScalarRelationFilter, InboxWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "inboxId_userId">

  export type InboxMemberOrderByWithAggregationInput = {
    id?: SortOrder
    inboxId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    _count?: InboxMemberCountOrderByAggregateInput
    _avg?: InboxMemberAvgOrderByAggregateInput
    _max?: InboxMemberMaxOrderByAggregateInput
    _min?: InboxMemberMinOrderByAggregateInput
    _sum?: InboxMemberSumOrderByAggregateInput
  }

  export type InboxMemberScalarWhereWithAggregatesInput = {
    AND?: InboxMemberScalarWhereWithAggregatesInput | InboxMemberScalarWhereWithAggregatesInput[]
    OR?: InboxMemberScalarWhereWithAggregatesInput[]
    NOT?: InboxMemberScalarWhereWithAggregatesInput | InboxMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InboxMember"> | number
    inboxId?: IntWithAggregatesFilter<"InboxMember"> | number
    userId?: IntWithAggregatesFilter<"InboxMember"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"InboxMember"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    inboxId?: IntFilter<"Message"> | number
    senderId?: IntNullableFilter<"Message"> | number | null
    content?: StringNullableFilter<"Message"> | string | null
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    mediaType?: StringNullableFilter<"Message"> | string | null
    sentAt?: DateTimeFilter<"Message"> | Date | string
    inbox?: XOR<InboxScalarRelationFilter, InboxWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reads?: MessageReadListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    inboxId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    mediaType?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    inbox?: InboxOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    reads?: MessageReadOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    inboxId?: IntFilter<"Message"> | number
    senderId?: IntNullableFilter<"Message"> | number | null
    content?: StringNullableFilter<"Message"> | string | null
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    mediaType?: StringNullableFilter<"Message"> | string | null
    sentAt?: DateTimeFilter<"Message"> | Date | string
    inbox?: XOR<InboxScalarRelationFilter, InboxWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reads?: MessageReadListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    inboxId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    mediaType?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    inboxId?: IntWithAggregatesFilter<"Message"> | number
    senderId?: IntNullableWithAggregatesFilter<"Message"> | number | null
    content?: StringNullableWithAggregatesFilter<"Message"> | string | null
    mediaUrl?: StringNullableWithAggregatesFilter<"Message"> | string | null
    mediaType?: StringNullableWithAggregatesFilter<"Message"> | string | null
    sentAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type MessageReadWhereInput = {
    AND?: MessageReadWhereInput | MessageReadWhereInput[]
    OR?: MessageReadWhereInput[]
    NOT?: MessageReadWhereInput | MessageReadWhereInput[]
    id?: IntFilter<"MessageRead"> | number
    messageId?: IntFilter<"MessageRead"> | number
    userId?: IntFilter<"MessageRead"> | number
    readAt?: DateTimeFilter<"MessageRead"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageReadOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
    message?: MessageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MessageReadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    messageId_userId?: MessageReadMessageIdUserIdCompoundUniqueInput
    AND?: MessageReadWhereInput | MessageReadWhereInput[]
    OR?: MessageReadWhereInput[]
    NOT?: MessageReadWhereInput | MessageReadWhereInput[]
    messageId?: IntFilter<"MessageRead"> | number
    userId?: IntFilter<"MessageRead"> | number
    readAt?: DateTimeFilter<"MessageRead"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "messageId_userId">

  export type MessageReadOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
    _count?: MessageReadCountOrderByAggregateInput
    _avg?: MessageReadAvgOrderByAggregateInput
    _max?: MessageReadMaxOrderByAggregateInput
    _min?: MessageReadMinOrderByAggregateInput
    _sum?: MessageReadSumOrderByAggregateInput
  }

  export type MessageReadScalarWhereWithAggregatesInput = {
    AND?: MessageReadScalarWhereWithAggregatesInput | MessageReadScalarWhereWithAggregatesInput[]
    OR?: MessageReadScalarWhereWithAggregatesInput[]
    NOT?: MessageReadScalarWhereWithAggregatesInput | MessageReadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MessageRead"> | number
    messageId?: IntWithAggregatesFilter<"MessageRead"> | number
    userId?: IntWithAggregatesFilter<"MessageRead"> | number
    readAt?: DateTimeWithAggregatesFilter<"MessageRead"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    profilePicUrl?: string | null
    createdAt?: Date | string
    messages?: MessageCreateNestedManyWithoutSenderInput
    reads?: MessageReadCreateNestedManyWithoutUserInput
    inboxMemberships?: InboxMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    profilePicUrl?: string | null
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    reads?: MessageReadUncheckedCreateNestedManyWithoutUserInput
    inboxMemberships?: InboxMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutSenderNestedInput
    reads?: MessageReadUpdateManyWithoutUserNestedInput
    inboxMemberships?: InboxMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    reads?: MessageReadUncheckedUpdateManyWithoutUserNestedInput
    inboxMemberships?: InboxMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    profilePicUrl?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxCreateInput = {
    isGroup?: boolean
    name?: string | null
    createdAt?: Date | string
    lastMessageAt?: Date | string | null
    messages?: MessageCreateNestedManyWithoutInboxInput
    members?: InboxMemberCreateNestedManyWithoutInboxInput
  }

  export type InboxUncheckedCreateInput = {
    id?: number
    isGroup?: boolean
    name?: string | null
    createdAt?: Date | string
    lastMessageAt?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutInboxInput
    members?: InboxMemberUncheckedCreateNestedManyWithoutInboxInput
  }

  export type InboxUpdateInput = {
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUpdateManyWithoutInboxNestedInput
    members?: InboxMemberUpdateManyWithoutInboxNestedInput
  }

  export type InboxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutInboxNestedInput
    members?: InboxMemberUncheckedUpdateManyWithoutInboxNestedInput
  }

  export type InboxCreateManyInput = {
    id?: number
    isGroup?: boolean
    name?: string | null
    createdAt?: Date | string
    lastMessageAt?: Date | string | null
  }

  export type InboxUpdateManyMutationInput = {
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InboxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InboxMemberCreateInput = {
    joinedAt?: Date | string
    inbox: InboxCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutInboxMembershipsInput
  }

  export type InboxMemberUncheckedCreateInput = {
    id?: number
    inboxId: number
    userId: number
    joinedAt?: Date | string
  }

  export type InboxMemberUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inbox?: InboxUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutInboxMembershipsNestedInput
  }

  export type InboxMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inboxId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxMemberCreateManyInput = {
    id?: number
    inboxId: number
    userId: number
    joinedAt?: Date | string
  }

  export type InboxMemberUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inboxId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    sentAt?: Date | string
    inbox: InboxCreateNestedOneWithoutMessagesInput
    sender?: UserCreateNestedOneWithoutMessagesInput
    reads?: MessageReadCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    inboxId: number
    senderId?: number | null
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    sentAt?: Date | string
    reads?: MessageReadUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inbox?: InboxUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneWithoutMessagesNestedInput
    reads?: MessageReadUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inboxId?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reads?: MessageReadUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: number
    inboxId: number
    senderId?: number | null
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    sentAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inboxId?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReadCreateInput = {
    readAt?: Date | string
    message: MessageCreateNestedOneWithoutReadsInput
    user: UserCreateNestedOneWithoutReadsInput
  }

  export type MessageReadUncheckedCreateInput = {
    id?: number
    messageId: number
    userId: number
    readAt?: Date | string
  }

  export type MessageReadUpdateInput = {
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutReadsNestedInput
    user?: UserUpdateOneRequiredWithoutReadsNestedInput
  }

  export type MessageReadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReadCreateManyInput = {
    id?: number
    messageId: number
    userId: number
    readAt?: Date | string
  }

  export type MessageReadUpdateManyMutationInput = {
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageReadListRelationFilter = {
    every?: MessageReadWhereInput
    some?: MessageReadWhereInput
    none?: MessageReadWhereInput
  }

  export type InboxMemberListRelationFilter = {
    every?: InboxMemberWhereInput
    some?: InboxMemberWhereInput
    none?: InboxMemberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageReadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InboxMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePicUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePicUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profilePicUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type InboxCountOrderByAggregateInput = {
    id?: SortOrder
    isGroup?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
  }

  export type InboxAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InboxMaxOrderByAggregateInput = {
    id?: SortOrder
    isGroup?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
  }

  export type InboxMinOrderByAggregateInput = {
    id?: SortOrder
    isGroup?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
  }

  export type InboxSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type InboxScalarRelationFilter = {
    is?: InboxWhereInput
    isNot?: InboxWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InboxMemberInboxIdUserIdCompoundUniqueInput = {
    inboxId: number
    userId: number
  }

  export type InboxMemberCountOrderByAggregateInput = {
    id?: SortOrder
    inboxId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type InboxMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    inboxId?: SortOrder
    userId?: SortOrder
  }

  export type InboxMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    inboxId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type InboxMemberMinOrderByAggregateInput = {
    id?: SortOrder
    inboxId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type InboxMemberSumOrderByAggregateInput = {
    id?: SortOrder
    inboxId?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    inboxId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    sentAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    inboxId?: SortOrder
    senderId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    inboxId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    sentAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    inboxId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    sentAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    inboxId?: SortOrder
    senderId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type MessageReadMessageIdUserIdCompoundUniqueInput = {
    messageId: number
    userId: number
  }

  export type MessageReadCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
  }

  export type MessageReadAvgOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
  }

  export type MessageReadMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
  }

  export type MessageReadMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    readAt?: SortOrder
  }

  export type MessageReadSumOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageReadCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageReadCreateWithoutUserInput, MessageReadUncheckedCreateWithoutUserInput> | MessageReadCreateWithoutUserInput[] | MessageReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageReadCreateOrConnectWithoutUserInput | MessageReadCreateOrConnectWithoutUserInput[]
    createMany?: MessageReadCreateManyUserInputEnvelope
    connect?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
  }

  export type InboxMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<InboxMemberCreateWithoutUserInput, InboxMemberUncheckedCreateWithoutUserInput> | InboxMemberCreateWithoutUserInput[] | InboxMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InboxMemberCreateOrConnectWithoutUserInput | InboxMemberCreateOrConnectWithoutUserInput[]
    createMany?: InboxMemberCreateManyUserInputEnvelope
    connect?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageReadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageReadCreateWithoutUserInput, MessageReadUncheckedCreateWithoutUserInput> | MessageReadCreateWithoutUserInput[] | MessageReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageReadCreateOrConnectWithoutUserInput | MessageReadCreateOrConnectWithoutUserInput[]
    createMany?: MessageReadCreateManyUserInputEnvelope
    connect?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
  }

  export type InboxMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InboxMemberCreateWithoutUserInput, InboxMemberUncheckedCreateWithoutUserInput> | InboxMemberCreateWithoutUserInput[] | InboxMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InboxMemberCreateOrConnectWithoutUserInput | InboxMemberCreateOrConnectWithoutUserInput[]
    createMany?: InboxMemberCreateManyUserInputEnvelope
    connect?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageReadUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageReadCreateWithoutUserInput, MessageReadUncheckedCreateWithoutUserInput> | MessageReadCreateWithoutUserInput[] | MessageReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageReadCreateOrConnectWithoutUserInput | MessageReadCreateOrConnectWithoutUserInput[]
    upsert?: MessageReadUpsertWithWhereUniqueWithoutUserInput | MessageReadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageReadCreateManyUserInputEnvelope
    set?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    disconnect?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    delete?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    connect?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    update?: MessageReadUpdateWithWhereUniqueWithoutUserInput | MessageReadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageReadUpdateManyWithWhereWithoutUserInput | MessageReadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageReadScalarWhereInput | MessageReadScalarWhereInput[]
  }

  export type InboxMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<InboxMemberCreateWithoutUserInput, InboxMemberUncheckedCreateWithoutUserInput> | InboxMemberCreateWithoutUserInput[] | InboxMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InboxMemberCreateOrConnectWithoutUserInput | InboxMemberCreateOrConnectWithoutUserInput[]
    upsert?: InboxMemberUpsertWithWhereUniqueWithoutUserInput | InboxMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InboxMemberCreateManyUserInputEnvelope
    set?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    disconnect?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    delete?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    connect?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    update?: InboxMemberUpdateWithWhereUniqueWithoutUserInput | InboxMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InboxMemberUpdateManyWithWhereWithoutUserInput | InboxMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InboxMemberScalarWhereInput | InboxMemberScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageReadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageReadCreateWithoutUserInput, MessageReadUncheckedCreateWithoutUserInput> | MessageReadCreateWithoutUserInput[] | MessageReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageReadCreateOrConnectWithoutUserInput | MessageReadCreateOrConnectWithoutUserInput[]
    upsert?: MessageReadUpsertWithWhereUniqueWithoutUserInput | MessageReadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageReadCreateManyUserInputEnvelope
    set?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    disconnect?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    delete?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    connect?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    update?: MessageReadUpdateWithWhereUniqueWithoutUserInput | MessageReadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageReadUpdateManyWithWhereWithoutUserInput | MessageReadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageReadScalarWhereInput | MessageReadScalarWhereInput[]
  }

  export type InboxMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InboxMemberCreateWithoutUserInput, InboxMemberUncheckedCreateWithoutUserInput> | InboxMemberCreateWithoutUserInput[] | InboxMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InboxMemberCreateOrConnectWithoutUserInput | InboxMemberCreateOrConnectWithoutUserInput[]
    upsert?: InboxMemberUpsertWithWhereUniqueWithoutUserInput | InboxMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InboxMemberCreateManyUserInputEnvelope
    set?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    disconnect?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    delete?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    connect?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    update?: InboxMemberUpdateWithWhereUniqueWithoutUserInput | InboxMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InboxMemberUpdateManyWithWhereWithoutUserInput | InboxMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InboxMemberScalarWhereInput | InboxMemberScalarWhereInput[]
  }

  export type MessageCreateNestedManyWithoutInboxInput = {
    create?: XOR<MessageCreateWithoutInboxInput, MessageUncheckedCreateWithoutInboxInput> | MessageCreateWithoutInboxInput[] | MessageUncheckedCreateWithoutInboxInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutInboxInput | MessageCreateOrConnectWithoutInboxInput[]
    createMany?: MessageCreateManyInboxInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type InboxMemberCreateNestedManyWithoutInboxInput = {
    create?: XOR<InboxMemberCreateWithoutInboxInput, InboxMemberUncheckedCreateWithoutInboxInput> | InboxMemberCreateWithoutInboxInput[] | InboxMemberUncheckedCreateWithoutInboxInput[]
    connectOrCreate?: InboxMemberCreateOrConnectWithoutInboxInput | InboxMemberCreateOrConnectWithoutInboxInput[]
    createMany?: InboxMemberCreateManyInboxInputEnvelope
    connect?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutInboxInput = {
    create?: XOR<MessageCreateWithoutInboxInput, MessageUncheckedCreateWithoutInboxInput> | MessageCreateWithoutInboxInput[] | MessageUncheckedCreateWithoutInboxInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutInboxInput | MessageCreateOrConnectWithoutInboxInput[]
    createMany?: MessageCreateManyInboxInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type InboxMemberUncheckedCreateNestedManyWithoutInboxInput = {
    create?: XOR<InboxMemberCreateWithoutInboxInput, InboxMemberUncheckedCreateWithoutInboxInput> | InboxMemberCreateWithoutInboxInput[] | InboxMemberUncheckedCreateWithoutInboxInput[]
    connectOrCreate?: InboxMemberCreateOrConnectWithoutInboxInput | InboxMemberCreateOrConnectWithoutInboxInput[]
    createMany?: InboxMemberCreateManyInboxInputEnvelope
    connect?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MessageUpdateManyWithoutInboxNestedInput = {
    create?: XOR<MessageCreateWithoutInboxInput, MessageUncheckedCreateWithoutInboxInput> | MessageCreateWithoutInboxInput[] | MessageUncheckedCreateWithoutInboxInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutInboxInput | MessageCreateOrConnectWithoutInboxInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutInboxInput | MessageUpsertWithWhereUniqueWithoutInboxInput[]
    createMany?: MessageCreateManyInboxInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutInboxInput | MessageUpdateWithWhereUniqueWithoutInboxInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutInboxInput | MessageUpdateManyWithWhereWithoutInboxInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type InboxMemberUpdateManyWithoutInboxNestedInput = {
    create?: XOR<InboxMemberCreateWithoutInboxInput, InboxMemberUncheckedCreateWithoutInboxInput> | InboxMemberCreateWithoutInboxInput[] | InboxMemberUncheckedCreateWithoutInboxInput[]
    connectOrCreate?: InboxMemberCreateOrConnectWithoutInboxInput | InboxMemberCreateOrConnectWithoutInboxInput[]
    upsert?: InboxMemberUpsertWithWhereUniqueWithoutInboxInput | InboxMemberUpsertWithWhereUniqueWithoutInboxInput[]
    createMany?: InboxMemberCreateManyInboxInputEnvelope
    set?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    disconnect?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    delete?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    connect?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    update?: InboxMemberUpdateWithWhereUniqueWithoutInboxInput | InboxMemberUpdateWithWhereUniqueWithoutInboxInput[]
    updateMany?: InboxMemberUpdateManyWithWhereWithoutInboxInput | InboxMemberUpdateManyWithWhereWithoutInboxInput[]
    deleteMany?: InboxMemberScalarWhereInput | InboxMemberScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutInboxNestedInput = {
    create?: XOR<MessageCreateWithoutInboxInput, MessageUncheckedCreateWithoutInboxInput> | MessageCreateWithoutInboxInput[] | MessageUncheckedCreateWithoutInboxInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutInboxInput | MessageCreateOrConnectWithoutInboxInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutInboxInput | MessageUpsertWithWhereUniqueWithoutInboxInput[]
    createMany?: MessageCreateManyInboxInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutInboxInput | MessageUpdateWithWhereUniqueWithoutInboxInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutInboxInput | MessageUpdateManyWithWhereWithoutInboxInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type InboxMemberUncheckedUpdateManyWithoutInboxNestedInput = {
    create?: XOR<InboxMemberCreateWithoutInboxInput, InboxMemberUncheckedCreateWithoutInboxInput> | InboxMemberCreateWithoutInboxInput[] | InboxMemberUncheckedCreateWithoutInboxInput[]
    connectOrCreate?: InboxMemberCreateOrConnectWithoutInboxInput | InboxMemberCreateOrConnectWithoutInboxInput[]
    upsert?: InboxMemberUpsertWithWhereUniqueWithoutInboxInput | InboxMemberUpsertWithWhereUniqueWithoutInboxInput[]
    createMany?: InboxMemberCreateManyInboxInputEnvelope
    set?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    disconnect?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    delete?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    connect?: InboxMemberWhereUniqueInput | InboxMemberWhereUniqueInput[]
    update?: InboxMemberUpdateWithWhereUniqueWithoutInboxInput | InboxMemberUpdateWithWhereUniqueWithoutInboxInput[]
    updateMany?: InboxMemberUpdateManyWithWhereWithoutInboxInput | InboxMemberUpdateManyWithWhereWithoutInboxInput[]
    deleteMany?: InboxMemberScalarWhereInput | InboxMemberScalarWhereInput[]
  }

  export type InboxCreateNestedOneWithoutMembersInput = {
    create?: XOR<InboxCreateWithoutMembersInput, InboxUncheckedCreateWithoutMembersInput>
    connectOrCreate?: InboxCreateOrConnectWithoutMembersInput
    connect?: InboxWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInboxMembershipsInput = {
    create?: XOR<UserCreateWithoutInboxMembershipsInput, UserUncheckedCreateWithoutInboxMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInboxMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type InboxUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<InboxCreateWithoutMembersInput, InboxUncheckedCreateWithoutMembersInput>
    connectOrCreate?: InboxCreateOrConnectWithoutMembersInput
    upsert?: InboxUpsertWithoutMembersInput
    connect?: InboxWhereUniqueInput
    update?: XOR<XOR<InboxUpdateToOneWithWhereWithoutMembersInput, InboxUpdateWithoutMembersInput>, InboxUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutInboxMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutInboxMembershipsInput, UserUncheckedCreateWithoutInboxMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInboxMembershipsInput
    upsert?: UserUpsertWithoutInboxMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInboxMembershipsInput, UserUpdateWithoutInboxMembershipsInput>, UserUncheckedUpdateWithoutInboxMembershipsInput>
  }

  export type InboxCreateNestedOneWithoutMessagesInput = {
    create?: XOR<InboxCreateWithoutMessagesInput, InboxUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: InboxCreateOrConnectWithoutMessagesInput
    connect?: InboxWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageReadCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageReadCreateWithoutMessageInput, MessageReadUncheckedCreateWithoutMessageInput> | MessageReadCreateWithoutMessageInput[] | MessageReadUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReadCreateOrConnectWithoutMessageInput | MessageReadCreateOrConnectWithoutMessageInput[]
    createMany?: MessageReadCreateManyMessageInputEnvelope
    connect?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
  }

  export type MessageReadUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageReadCreateWithoutMessageInput, MessageReadUncheckedCreateWithoutMessageInput> | MessageReadCreateWithoutMessageInput[] | MessageReadUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReadCreateOrConnectWithoutMessageInput | MessageReadCreateOrConnectWithoutMessageInput[]
    createMany?: MessageReadCreateManyMessageInputEnvelope
    connect?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
  }

  export type InboxUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<InboxCreateWithoutMessagesInput, InboxUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: InboxCreateOrConnectWithoutMessagesInput
    upsert?: InboxUpsertWithoutMessagesInput
    connect?: InboxWhereUniqueInput
    update?: XOR<XOR<InboxUpdateToOneWithWhereWithoutMessagesInput, InboxUpdateWithoutMessagesInput>, InboxUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type MessageReadUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageReadCreateWithoutMessageInput, MessageReadUncheckedCreateWithoutMessageInput> | MessageReadCreateWithoutMessageInput[] | MessageReadUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReadCreateOrConnectWithoutMessageInput | MessageReadCreateOrConnectWithoutMessageInput[]
    upsert?: MessageReadUpsertWithWhereUniqueWithoutMessageInput | MessageReadUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageReadCreateManyMessageInputEnvelope
    set?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    disconnect?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    delete?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    connect?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    update?: MessageReadUpdateWithWhereUniqueWithoutMessageInput | MessageReadUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageReadUpdateManyWithWhereWithoutMessageInput | MessageReadUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageReadScalarWhereInput | MessageReadScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MessageReadUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageReadCreateWithoutMessageInput, MessageReadUncheckedCreateWithoutMessageInput> | MessageReadCreateWithoutMessageInput[] | MessageReadUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReadCreateOrConnectWithoutMessageInput | MessageReadCreateOrConnectWithoutMessageInput[]
    upsert?: MessageReadUpsertWithWhereUniqueWithoutMessageInput | MessageReadUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageReadCreateManyMessageInputEnvelope
    set?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    disconnect?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    delete?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    connect?: MessageReadWhereUniqueInput | MessageReadWhereUniqueInput[]
    update?: MessageReadUpdateWithWhereUniqueWithoutMessageInput | MessageReadUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageReadUpdateManyWithWhereWithoutMessageInput | MessageReadUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageReadScalarWhereInput | MessageReadScalarWhereInput[]
  }

  export type MessageCreateNestedOneWithoutReadsInput = {
    create?: XOR<MessageCreateWithoutReadsInput, MessageUncheckedCreateWithoutReadsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReadsInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReadsInput = {
    create?: XOR<UserCreateWithoutReadsInput, UserUncheckedCreateWithoutReadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReadsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageUpdateOneRequiredWithoutReadsNestedInput = {
    create?: XOR<MessageCreateWithoutReadsInput, MessageUncheckedCreateWithoutReadsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReadsInput
    upsert?: MessageUpsertWithoutReadsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutReadsInput, MessageUpdateWithoutReadsInput>, MessageUncheckedUpdateWithoutReadsInput>
  }

  export type UserUpdateOneRequiredWithoutReadsNestedInput = {
    create?: XOR<UserCreateWithoutReadsInput, UserUncheckedCreateWithoutReadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReadsInput
    upsert?: UserUpsertWithoutReadsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReadsInput, UserUpdateWithoutReadsInput>, UserUncheckedUpdateWithoutReadsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MessageCreateWithoutSenderInput = {
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    sentAt?: Date | string
    inbox: InboxCreateNestedOneWithoutMessagesInput
    reads?: MessageReadCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    inboxId: number
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    sentAt?: Date | string
    reads?: MessageReadUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageReadCreateWithoutUserInput = {
    readAt?: Date | string
    message: MessageCreateNestedOneWithoutReadsInput
  }

  export type MessageReadUncheckedCreateWithoutUserInput = {
    id?: number
    messageId: number
    readAt?: Date | string
  }

  export type MessageReadCreateOrConnectWithoutUserInput = {
    where: MessageReadWhereUniqueInput
    create: XOR<MessageReadCreateWithoutUserInput, MessageReadUncheckedCreateWithoutUserInput>
  }

  export type MessageReadCreateManyUserInputEnvelope = {
    data: MessageReadCreateManyUserInput | MessageReadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InboxMemberCreateWithoutUserInput = {
    joinedAt?: Date | string
    inbox: InboxCreateNestedOneWithoutMembersInput
  }

  export type InboxMemberUncheckedCreateWithoutUserInput = {
    id?: number
    inboxId: number
    joinedAt?: Date | string
  }

  export type InboxMemberCreateOrConnectWithoutUserInput = {
    where: InboxMemberWhereUniqueInput
    create: XOR<InboxMemberCreateWithoutUserInput, InboxMemberUncheckedCreateWithoutUserInput>
  }

  export type InboxMemberCreateManyUserInputEnvelope = {
    data: InboxMemberCreateManyUserInput | InboxMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    inboxId?: IntFilter<"Message"> | number
    senderId?: IntNullableFilter<"Message"> | number | null
    content?: StringNullableFilter<"Message"> | string | null
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    mediaType?: StringNullableFilter<"Message"> | string | null
    sentAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageReadUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageReadWhereUniqueInput
    update: XOR<MessageReadUpdateWithoutUserInput, MessageReadUncheckedUpdateWithoutUserInput>
    create: XOR<MessageReadCreateWithoutUserInput, MessageReadUncheckedCreateWithoutUserInput>
  }

  export type MessageReadUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageReadWhereUniqueInput
    data: XOR<MessageReadUpdateWithoutUserInput, MessageReadUncheckedUpdateWithoutUserInput>
  }

  export type MessageReadUpdateManyWithWhereWithoutUserInput = {
    where: MessageReadScalarWhereInput
    data: XOR<MessageReadUpdateManyMutationInput, MessageReadUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageReadScalarWhereInput = {
    AND?: MessageReadScalarWhereInput | MessageReadScalarWhereInput[]
    OR?: MessageReadScalarWhereInput[]
    NOT?: MessageReadScalarWhereInput | MessageReadScalarWhereInput[]
    id?: IntFilter<"MessageRead"> | number
    messageId?: IntFilter<"MessageRead"> | number
    userId?: IntFilter<"MessageRead"> | number
    readAt?: DateTimeFilter<"MessageRead"> | Date | string
  }

  export type InboxMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: InboxMemberWhereUniqueInput
    update: XOR<InboxMemberUpdateWithoutUserInput, InboxMemberUncheckedUpdateWithoutUserInput>
    create: XOR<InboxMemberCreateWithoutUserInput, InboxMemberUncheckedCreateWithoutUserInput>
  }

  export type InboxMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: InboxMemberWhereUniqueInput
    data: XOR<InboxMemberUpdateWithoutUserInput, InboxMemberUncheckedUpdateWithoutUserInput>
  }

  export type InboxMemberUpdateManyWithWhereWithoutUserInput = {
    where: InboxMemberScalarWhereInput
    data: XOR<InboxMemberUpdateManyMutationInput, InboxMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type InboxMemberScalarWhereInput = {
    AND?: InboxMemberScalarWhereInput | InboxMemberScalarWhereInput[]
    OR?: InboxMemberScalarWhereInput[]
    NOT?: InboxMemberScalarWhereInput | InboxMemberScalarWhereInput[]
    id?: IntFilter<"InboxMember"> | number
    inboxId?: IntFilter<"InboxMember"> | number
    userId?: IntFilter<"InboxMember"> | number
    joinedAt?: DateTimeFilter<"InboxMember"> | Date | string
  }

  export type MessageCreateWithoutInboxInput = {
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    sentAt?: Date | string
    sender?: UserCreateNestedOneWithoutMessagesInput
    reads?: MessageReadCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutInboxInput = {
    id?: number
    senderId?: number | null
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    sentAt?: Date | string
    reads?: MessageReadUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutInboxInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutInboxInput, MessageUncheckedCreateWithoutInboxInput>
  }

  export type MessageCreateManyInboxInputEnvelope = {
    data: MessageCreateManyInboxInput | MessageCreateManyInboxInput[]
    skipDuplicates?: boolean
  }

  export type InboxMemberCreateWithoutInboxInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutInboxMembershipsInput
  }

  export type InboxMemberUncheckedCreateWithoutInboxInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
  }

  export type InboxMemberCreateOrConnectWithoutInboxInput = {
    where: InboxMemberWhereUniqueInput
    create: XOR<InboxMemberCreateWithoutInboxInput, InboxMemberUncheckedCreateWithoutInboxInput>
  }

  export type InboxMemberCreateManyInboxInputEnvelope = {
    data: InboxMemberCreateManyInboxInput | InboxMemberCreateManyInboxInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutInboxInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutInboxInput, MessageUncheckedUpdateWithoutInboxInput>
    create: XOR<MessageCreateWithoutInboxInput, MessageUncheckedCreateWithoutInboxInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutInboxInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutInboxInput, MessageUncheckedUpdateWithoutInboxInput>
  }

  export type MessageUpdateManyWithWhereWithoutInboxInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutInboxInput>
  }

  export type InboxMemberUpsertWithWhereUniqueWithoutInboxInput = {
    where: InboxMemberWhereUniqueInput
    update: XOR<InboxMemberUpdateWithoutInboxInput, InboxMemberUncheckedUpdateWithoutInboxInput>
    create: XOR<InboxMemberCreateWithoutInboxInput, InboxMemberUncheckedCreateWithoutInboxInput>
  }

  export type InboxMemberUpdateWithWhereUniqueWithoutInboxInput = {
    where: InboxMemberWhereUniqueInput
    data: XOR<InboxMemberUpdateWithoutInboxInput, InboxMemberUncheckedUpdateWithoutInboxInput>
  }

  export type InboxMemberUpdateManyWithWhereWithoutInboxInput = {
    where: InboxMemberScalarWhereInput
    data: XOR<InboxMemberUpdateManyMutationInput, InboxMemberUncheckedUpdateManyWithoutInboxInput>
  }

  export type InboxCreateWithoutMembersInput = {
    isGroup?: boolean
    name?: string | null
    createdAt?: Date | string
    lastMessageAt?: Date | string | null
    messages?: MessageCreateNestedManyWithoutInboxInput
  }

  export type InboxUncheckedCreateWithoutMembersInput = {
    id?: number
    isGroup?: boolean
    name?: string | null
    createdAt?: Date | string
    lastMessageAt?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutInboxInput
  }

  export type InboxCreateOrConnectWithoutMembersInput = {
    where: InboxWhereUniqueInput
    create: XOR<InboxCreateWithoutMembersInput, InboxUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutInboxMembershipsInput = {
    username: string
    password: string
    profilePicUrl?: string | null
    createdAt?: Date | string
    messages?: MessageCreateNestedManyWithoutSenderInput
    reads?: MessageReadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInboxMembershipsInput = {
    id?: number
    username: string
    password: string
    profilePicUrl?: string | null
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    reads?: MessageReadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInboxMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInboxMembershipsInput, UserUncheckedCreateWithoutInboxMembershipsInput>
  }

  export type InboxUpsertWithoutMembersInput = {
    update: XOR<InboxUpdateWithoutMembersInput, InboxUncheckedUpdateWithoutMembersInput>
    create: XOR<InboxCreateWithoutMembersInput, InboxUncheckedCreateWithoutMembersInput>
    where?: InboxWhereInput
  }

  export type InboxUpdateToOneWithWhereWithoutMembersInput = {
    where?: InboxWhereInput
    data: XOR<InboxUpdateWithoutMembersInput, InboxUncheckedUpdateWithoutMembersInput>
  }

  export type InboxUpdateWithoutMembersInput = {
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUpdateManyWithoutInboxNestedInput
  }

  export type InboxUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutInboxNestedInput
  }

  export type UserUpsertWithoutInboxMembershipsInput = {
    update: XOR<UserUpdateWithoutInboxMembershipsInput, UserUncheckedUpdateWithoutInboxMembershipsInput>
    create: XOR<UserCreateWithoutInboxMembershipsInput, UserUncheckedCreateWithoutInboxMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInboxMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInboxMembershipsInput, UserUncheckedUpdateWithoutInboxMembershipsInput>
  }

  export type UserUpdateWithoutInboxMembershipsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutSenderNestedInput
    reads?: MessageReadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInboxMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    reads?: MessageReadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InboxCreateWithoutMessagesInput = {
    isGroup?: boolean
    name?: string | null
    createdAt?: Date | string
    lastMessageAt?: Date | string | null
    members?: InboxMemberCreateNestedManyWithoutInboxInput
  }

  export type InboxUncheckedCreateWithoutMessagesInput = {
    id?: number
    isGroup?: boolean
    name?: string | null
    createdAt?: Date | string
    lastMessageAt?: Date | string | null
    members?: InboxMemberUncheckedCreateNestedManyWithoutInboxInput
  }

  export type InboxCreateOrConnectWithoutMessagesInput = {
    where: InboxWhereUniqueInput
    create: XOR<InboxCreateWithoutMessagesInput, InboxUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    username: string
    password: string
    profilePicUrl?: string | null
    createdAt?: Date | string
    reads?: MessageReadCreateNestedManyWithoutUserInput
    inboxMemberships?: InboxMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number
    username: string
    password: string
    profilePicUrl?: string | null
    createdAt?: Date | string
    reads?: MessageReadUncheckedCreateNestedManyWithoutUserInput
    inboxMemberships?: InboxMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type MessageReadCreateWithoutMessageInput = {
    readAt?: Date | string
    user: UserCreateNestedOneWithoutReadsInput
  }

  export type MessageReadUncheckedCreateWithoutMessageInput = {
    id?: number
    userId: number
    readAt?: Date | string
  }

  export type MessageReadCreateOrConnectWithoutMessageInput = {
    where: MessageReadWhereUniqueInput
    create: XOR<MessageReadCreateWithoutMessageInput, MessageReadUncheckedCreateWithoutMessageInput>
  }

  export type MessageReadCreateManyMessageInputEnvelope = {
    data: MessageReadCreateManyMessageInput | MessageReadCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type InboxUpsertWithoutMessagesInput = {
    update: XOR<InboxUpdateWithoutMessagesInput, InboxUncheckedUpdateWithoutMessagesInput>
    create: XOR<InboxCreateWithoutMessagesInput, InboxUncheckedCreateWithoutMessagesInput>
    where?: InboxWhereInput
  }

  export type InboxUpdateToOneWithWhereWithoutMessagesInput = {
    where?: InboxWhereInput
    data: XOR<InboxUpdateWithoutMessagesInput, InboxUncheckedUpdateWithoutMessagesInput>
  }

  export type InboxUpdateWithoutMessagesInput = {
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: InboxMemberUpdateManyWithoutInboxNestedInput
  }

  export type InboxUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: InboxMemberUncheckedUpdateManyWithoutInboxNestedInput
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reads?: MessageReadUpdateManyWithoutUserNestedInput
    inboxMemberships?: InboxMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reads?: MessageReadUncheckedUpdateManyWithoutUserNestedInput
    inboxMemberships?: InboxMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageReadUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageReadWhereUniqueInput
    update: XOR<MessageReadUpdateWithoutMessageInput, MessageReadUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageReadCreateWithoutMessageInput, MessageReadUncheckedCreateWithoutMessageInput>
  }

  export type MessageReadUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageReadWhereUniqueInput
    data: XOR<MessageReadUpdateWithoutMessageInput, MessageReadUncheckedUpdateWithoutMessageInput>
  }

  export type MessageReadUpdateManyWithWhereWithoutMessageInput = {
    where: MessageReadScalarWhereInput
    data: XOR<MessageReadUpdateManyMutationInput, MessageReadUncheckedUpdateManyWithoutMessageInput>
  }

  export type MessageCreateWithoutReadsInput = {
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    sentAt?: Date | string
    inbox: InboxCreateNestedOneWithoutMessagesInput
    sender?: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutReadsInput = {
    id?: number
    inboxId: number
    senderId?: number | null
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    sentAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutReadsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReadsInput, MessageUncheckedCreateWithoutReadsInput>
  }

  export type UserCreateWithoutReadsInput = {
    username: string
    password: string
    profilePicUrl?: string | null
    createdAt?: Date | string
    messages?: MessageCreateNestedManyWithoutSenderInput
    inboxMemberships?: InboxMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReadsInput = {
    id?: number
    username: string
    password: string
    profilePicUrl?: string | null
    createdAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    inboxMemberships?: InboxMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReadsInput, UserUncheckedCreateWithoutReadsInput>
  }

  export type MessageUpsertWithoutReadsInput = {
    update: XOR<MessageUpdateWithoutReadsInput, MessageUncheckedUpdateWithoutReadsInput>
    create: XOR<MessageCreateWithoutReadsInput, MessageUncheckedCreateWithoutReadsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutReadsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutReadsInput, MessageUncheckedUpdateWithoutReadsInput>
  }

  export type MessageUpdateWithoutReadsInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inbox?: InboxUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    inboxId?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutReadsInput = {
    update: XOR<UserUpdateWithoutReadsInput, UserUncheckedUpdateWithoutReadsInput>
    create: XOR<UserCreateWithoutReadsInput, UserUncheckedCreateWithoutReadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReadsInput, UserUncheckedUpdateWithoutReadsInput>
  }

  export type UserUpdateWithoutReadsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutSenderNestedInput
    inboxMemberships?: InboxMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    inboxMemberships?: InboxMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageCreateManySenderInput = {
    id?: number
    inboxId: number
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    sentAt?: Date | string
  }

  export type MessageReadCreateManyUserInput = {
    id?: number
    messageId: number
    readAt?: Date | string
  }

  export type InboxMemberCreateManyUserInput = {
    id?: number
    inboxId: number
    joinedAt?: Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inbox?: InboxUpdateOneRequiredWithoutMessagesNestedInput
    reads?: MessageReadUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    inboxId?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reads?: MessageReadUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    inboxId?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReadUpdateWithoutUserInput = {
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutReadsNestedInput
  }

  export type MessageReadUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReadUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxMemberUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inbox?: InboxUpdateOneRequiredWithoutMembersNestedInput
  }

  export type InboxMemberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    inboxId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxMemberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    inboxId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInboxInput = {
    id?: number
    senderId?: number | null
    content?: string | null
    mediaUrl?: string | null
    mediaType?: string | null
    sentAt?: Date | string
  }

  export type InboxMemberCreateManyInboxInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
  }

  export type MessageUpdateWithoutInboxInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutMessagesNestedInput
    reads?: MessageReadUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutInboxInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reads?: MessageReadUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutInboxInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxMemberUpdateWithoutInboxInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInboxMembershipsNestedInput
  }

  export type InboxMemberUncheckedUpdateWithoutInboxInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxMemberUncheckedUpdateManyWithoutInboxInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReadCreateManyMessageInput = {
    id?: number
    userId: number
    readAt?: Date | string
  }

  export type MessageReadUpdateWithoutMessageInput = {
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReadsNestedInput
  }

  export type MessageReadUncheckedUpdateWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReadUncheckedUpdateManyWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}