/**
 * Models and Collections for Vue.js
 *
 * @version 1.0.0
 */
import Model      from './Structures/Model'
import Collection from './Structures/Collection'

export { Model, Collection }

// Model types
export {
    ModelOptions,
    Mutation,
    AttributesValidationErrors,
    ValidationResultError,
    ValidationResultErrorFinalResult,
    ValidationResult,
    ValidationTask,
} from './Structures/Model';

// Collection types
export { Predicate } from './Structures/Collection';

// Base types
export {
    Options,
    RequestOperation,
    HttpMethods,
    RequestType,
    RequestOptions,
    Routes,
    Listener,
    RouteResolver,
    RequestFailureCallback,
    RequestSuccessCallback,
    OnRequestCallback,
} from './Structures/Base';

// HTTP
export { default as Response } from './HTTP/Response';
export { default as Request } from './HTTP/Request';
export { default as ProxyResponse } from './HTTP/ProxyResponse';
export { BaseResponse } from './HTTP/BaseResponse';

// Errors
export { default as RequestError } from './Errors/RequestError';
export { default as ResponseError } from './Errors/ResponseError';
export { default as ValidationError, Errors } from './Errors/ValidationError';

// Validation
export * from './Validation';
export * from './Validation/locale';
