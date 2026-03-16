# @risklight/vue-mc

Models and Collections for Vue.js 3. Fork of [vue-mc](https://github.com/FiguredLimited/vue-mc) with Vue 3 reactivity, full TypeScript support, and generic types.

## Install

```bash
npm install @risklight/vue-mc
```

Peer dependency: `vue >= 3.0.0`

## Usage

```ts
import { Model, Collection } from '@risklight/vue-mc';
import { required, string } from '@risklight/vue-mc/validation';

interface UserAttributes {
  id?: number;
  name: string;
  email: string;
}

class User extends Model<UserAttributes> {
  defaults(): Partial<UserAttributes> {
    return {
      name: '',
      email: '',
    };
  }

  validation() {
    return {
      name: required.and(string),
      email: required,
    };
  }

  routes() {
    return {
      fetch: '/users/{id}',
      save:  '/users',
    };
  }
}

class Users extends Collection<User> {
  model() {
    return User;
  }

  routes() {
    return {
      fetch: '/users',
    };
  }
}
```

### Typed API

```ts
const user = new User({ name: 'Oleg' });

user.get('name');        // string
user.get('email');       // string
user.set('name', 'Max'); // typed
user.attributes.name;    // string
user.$.name;             // string | undefined (saved state)
user.identifier();       // string | number | null | undefined

// Without generic — all attributes are any:
const model = new Model();
model.get('anything');   // any
```

### Validation

```ts
import { required, string, email, length } from '@risklight/vue-mc/validation';

class User extends Model<UserAttributes> {
  validation() {
    return {
      name:  required.and(string).and(length(1, 100)),
      email: required.and(email),
    };
  }
}
```

## Changes from original vue-mc

- **Vue 3 reactivity** — `reactive()` for attributes, `shallowRef()` for boolean flags, `markRaw()` on instances
- **Generic types** — `Model<A>`, `Collection<M>`, `Response<T>` with full TypeScript strict mode
- **All types exported** — `Options`, `ModelOptions`, `HttpMethods`, `Routes`, `RequestOptions`, `BaseResponse`, etc.
- **No cloneDeep** — replaced with `copyFrom()` to avoid circular reference stack overflow on reactive objects
- **Build** — Rollup 3, TypeScript 5, ES module output

## Build

```bash
npm install
npm run build
```

## License

[MIT](LICENSE)
