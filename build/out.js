(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module2) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var ReactVersion = "18.3.1";
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: null
          };
          var ReactCurrentActQueue = {
            current: null,
            // Used to reproduce behavior of `batchedUpdates` in legacy mode.
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning("warn", format, args);
              }
            }
          }
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var assign = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self2, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self2
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement2(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self2 = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              self2 = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self2 = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self2, source, owner, props);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape2(key) {
            var escapeRegex2 = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex2, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index4) {
            if (typeof element === "object" && element !== null && element.key != null) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape2("" + element.key);
            }
            return index4.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  {
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                      // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                      // eslint-disable-next-line react-internal/safe-string-coercion
                      escapeUserProvidedKey("" + mappedChild.key) + "/"
                    ) : "") + childKey
                  );
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result2 = [];
            var count = 0;
            mapIntoArray(children, result2, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result2;
          }
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              throw new Error("React.Children.only expected to receive a single React element child.");
            }
            return children;
          }
          function createContext3(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null,
              // Add these to use same hidden class in VM as ServerContext
              _defaultValue: null,
              _globalName: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(function(moduleObject2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              }, function(error2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                }
              }
              {
                if (!("default" in moduleObject)) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: Uninitialized,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef2(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext2(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          function useState2(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef2(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect2(create5, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create5, deps);
          }
          function useInsertionEffect(create5, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create5, deps);
          }
          function useLayoutEffect2(create5, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create5, deps);
          }
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo2(create5, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create5, deps);
          }
          function useImperativeHandle(ref, create5, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create5, deps);
          }
          function useDebugValue2(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix2;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix2 === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix2 = match && match[1] || "";
                }
              }
              return "\n" + prefix2 + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement2.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module2 && module2[requireString];
                enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                };
              }
            }
            return enqueueTaskImpl(task);
          }
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result2;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result2 = callback();
                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (result2 !== null && typeof result2 === "object" && typeof result2.then === "function") {
                var thenableResult = result2;
                var wasAwaited = false;
                var thenable = {
                  then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                      } else {
                        resolve(returnValue2);
                      }
                    }, function(error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    });
                  }
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                    Promise.resolve().then(function() {
                    }).then(function() {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                      }
                    });
                  }
                }
                return thenable;
              } else {
                var returnValue = result2;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function(resolve, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                      } else {
                        resolve(returnValue);
                      }
                    }
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function(resolve, reject) {
                      resolve(returnValue);
                    }
                  };
                  return _thenable2;
                }
              }
            }
          }
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function() {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve(returnValue);
              }
            }
          }
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i = 0;
                try {
                  for (; i < queue.length; i++) {
                    var callback = queue[i];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.act = act;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext3;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef2;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.startTransition = startTransition;
          exports.unstable_act = act;
          exports.useCallback = useCallback;
          exports.useContext = useContext2;
          exports.useDebugValue = useDebugValue2;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect2;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect2;
          exports.useMemo = useMemo2;
          exports.useReducer = useReducer;
          exports.useRef = useRef2;
          exports.useState = useState2;
          exports.useSyncExternalStore = useSyncExternalStore;
          exports.useTransition = useTransition;
          exports.version = ReactVersion;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module2) {
      "use strict";
      if (false) {
        module2.exports = null;
      } else {
        module2.exports = require_react_development();
      }
    }
  });

  // node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/hoist-non-react-statics/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module2) {
      "use strict";
      if (false) {
        module2.exports = null;
      } else {
        module2.exports = require_react_is_development();
      }
    }
  });

  // node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
  var require_hoist_non_react_statics_cjs = __commonJS({
    "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module2) {
      "use strict";
      var reactIs = require_react_is();
      var REACT_STATICS = {
        childContextTypes: true,
        contextType: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromError: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
      };
      var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
      };
      var FORWARD_REF_STATICS = {
        "$$typeof": true,
        render: true,
        defaultProps: true,
        displayName: true,
        propTypes: true
      };
      var MEMO_STATICS = {
        "$$typeof": true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true
      };
      var TYPE_STATICS = {};
      TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
      TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
      function getStatics(component) {
        if (reactIs.isMemo(component)) {
          return MEMO_STATICS;
        }
        return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
      }
      var defineProperty = Object.defineProperty;
      var getOwnPropertyNames = Object.getOwnPropertyNames;
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var getPrototypeOf = Object.getPrototypeOf;
      var objectPrototype = Object.prototype;
      function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== "string") {
          if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
              hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
            }
          }
          var keys = getOwnPropertyNames(sourceComponent);
          if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
          }
          var targetStatics = getStatics(targetComponent);
          var sourceStatics = getStatics(sourceComponent);
          for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
              var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
              try {
                defineProperty(targetComponent, key, descriptor);
              } catch (e) {
              }
            }
          }
        }
        return targetComponent;
      }
      module2.exports = hoistNonReactStatics2;
    }
  });

  // node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development2 = __commonJS({
    "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/prop-types/node_modules/react-is/index.js
  var require_react_is2 = __commonJS({
    "node_modules/prop-types/node_modules/react-is/index.js"(exports, module2) {
      "use strict";
      if (false) {
        module2.exports = null;
      } else {
        module2.exports = require_react_is_development2();
      }
    }
  });

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/object-assign/index.js"(exports, module2) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module2) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module2.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/prop-types/lib/has.js
  var require_has = __commonJS({
    "node_modules/prop-types/lib/has.js"(exports, module2) {
      module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    }
  });

  // node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "node_modules/prop-types/checkPropTypes.js"(exports, module2) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error(
                    (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning(
                  (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                );
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning(
                  "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
                );
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module2.exports = checkPropTypes;
    }
  });

  // node_modules/prop-types/factoryWithTypeCheckers.js
  var require_factoryWithTypeCheckers = __commonJS({
    "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module2) {
      "use strict";
      var ReactIs = require_react_is2();
      var assign = require_object_assign();
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      var has = require_has();
      var checkPropTypes = require_checkPropTypes();
      var printWarning = function() {
      };
      if (true) {
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      module2.exports = function(isValidElement, throwOnDirectAccess) {
        var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === "function") {
            return iteratorFn;
          }
        }
        var ANONYMOUS = "<<anonymous>>";
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is(x, y) {
          if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
          } else {
            return x !== x && y !== y;
          }
        }
        function PropTypeError(message, data) {
          this.message = message;
          this.data = data && typeof data === "object" ? data : {};
          this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate) {
          if (true) {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                var err = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                );
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3) {
                  printWarning(
                    "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                  );
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }
          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
                { expectedType }
              );
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            if (true) {
              if (arguments.length > 1) {
                printWarning(
                  "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                );
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
              if (is(propValue, expectedValues[i])) {
                return null;
              }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) {
              if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
            return emptyFunctionThatReturnsNull;
          }
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== "function") {
              printWarning(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
              );
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
              var checker2 = arrayOfTypeCheckers[i2];
              var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
              if (checkerResult == null) {
                return null;
              }
              if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                expectedTypes.push(checkerResult.data.expectedType);
              }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function invalidValidatorError(componentName, location, propFullName, key, type) {
          return new PropTypeError(
            (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
          );
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            var allKeys = assign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (has(shapeTypes, key) && typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              if (!checker) {
                return new PropTypeError(
                  "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                );
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return true;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement(propValue)) {
                return true;
              }
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }
              return true;
            default:
              return false;
          }
        }
        function isSymbol(propType, propValue) {
          if (propType === "symbol") {
            return true;
          }
          if (!propValue) {
            return false;
          }
          if (propValue["@@toStringTag"] === "Symbol") {
            return true;
          }
          if (typeof Symbol === "function" && propValue instanceof Symbol) {
            return true;
          }
          return false;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return "array";
          }
          if (propValue instanceof RegExp) {
            return "object";
          }
          if (isSymbol(propType, propValue)) {
            return "symbol";
          }
          return propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue === "undefined" || propValue === null) {
            return "" + propValue;
          }
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date) {
              return "date";
            } else if (propValue instanceof RegExp) {
              return "regexp";
            }
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);
          switch (type) {
            case "array":
            case "object":
              return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type;
            default:
              return type;
          }
        }
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }
        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/prop-types/index.js"(exports, module2) {
      if (true) {
        ReactIs = require_react_is2();
        throwOnDirectAccess = true;
        module2.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module2.exports = null();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // node_modules/react-display-name/lib/getDisplayName.js
  var require_getDisplayName = __commonJS({
    "node_modules/react-display-name/lib/getDisplayName.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = getDisplayName2;
      function getDisplayName2(Component) {
        return Component.displayName || Component.name || (typeof Component === "string" && Component.length > 0 ? Component : "Unknown");
      }
    }
  });

  // src/App.jsx
  var import_react5 = __toESM(require_react());

  // node_modules/react-icons/lib/iconBase.mjs
  var import_react2 = __toESM(require_react(), 1);

  // node_modules/react-icons/lib/iconContext.mjs
  var import_react = __toESM(require_react(), 1);
  var DefaultContext = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  };
  var IconContext = import_react.default.createContext && /* @__PURE__ */ import_react.default.createContext(DefaultContext);

  // node_modules/react-icons/lib/iconBase.mjs
  var _excluded = ["attr", "size", "title"];
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
        _defineProperty(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function Tree2Element(tree) {
    return tree && tree.map((node, i) => /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread({
      key: i
    }, node.attr), Tree2Element(node.child)));
  }
  function GenIcon(data) {
    return (props) => /* @__PURE__ */ import_react2.default.createElement(IconBase, _extends({
      attr: _objectSpread({}, data.attr)
    }, props), Tree2Element(data.child));
  }
  function IconBase(props) {
    var elem = (conf) => {
      var {
        attr,
        size,
        title
      } = props, svgProps = _objectWithoutProperties(props, _excluded);
      var computedSize = size || conf.size || "1em";
      var className;
      if (conf.className) className = conf.className;
      if (props.className) className = (className ? className + " " : "") + props.className;
      return /* @__PURE__ */ import_react2.default.createElement("svg", _extends({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, conf.attr, attr, svgProps, {
        className,
        style: _objectSpread(_objectSpread({
          color: props.color || conf.color
        }, conf.style), props.style),
        height: computedSize,
        width: computedSize,
        xmlns: "http://www.w3.org/2000/svg"
      }), title && /* @__PURE__ */ import_react2.default.createElement("title", null, title), props.children);
    };
    return IconContext !== void 0 ? /* @__PURE__ */ import_react2.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
  }

  // node_modules/react-icons/io5/index.mjs
  function IoArrowUpCircleSharp(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm80.09 224L272 208.42V358h-32V208.42L175.91 272l-22.54-22.7L256 147.46 358.63 249.3z" }, "child": [] }] })(props);
  }
  function IoClose(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" }, "child": [] }] })(props);
  }

  // node_modules/react-icons/vsc/index.mjs
  function VscChromeMinimize(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "d": "M14 8v1H3V8h11z" }, "child": [] }] })(props);
  }

  // node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends2() {
    return _extends2 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends2.apply(null, arguments);
  }

  // node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
  function _objectWithoutPropertiesLoose2(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t[n] = r[n];
    }
    return t;
  }

  // node_modules/react-jss/dist/react-jss.esm.js
  var import_react4 = __toESM(require_react());
  var import_hoist_non_react_statics2 = __toESM(require_hoist_non_react_statics_cjs());

  // node_modules/theming/dist/theming.esm.js
  var import_react3 = __toESM(require_react());

  // node_modules/tiny-warning/dist/tiny-warning.esm.js
  var isProduction = false;
  function warning(condition, message) {
    if (!isProduction) {
      if (condition) {
        return;
      }
      var text = "Warning: " + message;
      if (typeof console !== "undefined") {
        console.warn(text);
      }
      try {
        throw Error(text);
      } catch (x) {
      }
    }
  }
  var tiny_warning_esm_default = warning;

  // node_modules/theming/dist/theming.esm.js
  var import_prop_types = __toESM(require_prop_types());
  var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
  var import_react_display_name = __toESM(require_getDisplayName());
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends3() {
    _extends3 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends3.apply(this, arguments);
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && !Array.isArray(obj);
  }
  function createThemeProvider(context) {
    var ThemeProvider2 = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(ThemeProvider3, _React$Component);
      function ThemeProvider3() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _defineProperty2(_assertThisInitialized(_assertThisInitialized(_this)), "cachedTheme", void 0);
        _defineProperty2(_assertThisInitialized(_assertThisInitialized(_this)), "lastOuterTheme", void 0);
        _defineProperty2(_assertThisInitialized(_assertThisInitialized(_this)), "lastTheme", void 0);
        _defineProperty2(_assertThisInitialized(_assertThisInitialized(_this)), "renderProvider", function(outerTheme) {
          var children = _this.props.children;
          return import_react3.default.createElement(context.Provider, {
            value: _this.getTheme(outerTheme)
          }, children);
        });
        return _this;
      }
      var _proto = ThemeProvider3.prototype;
      _proto.getTheme = function getTheme(outerTheme) {
        if (this.props.theme !== this.lastTheme || outerTheme !== this.lastOuterTheme || !this.cachedTheme) {
          this.lastOuterTheme = outerTheme;
          this.lastTheme = this.props.theme;
          if (typeof this.lastTheme === "function") {
            var theme = this.props.theme;
            this.cachedTheme = theme(outerTheme);
            true ? tiny_warning_esm_default(isObject(this.cachedTheme), "[ThemeProvider] Please return an object from your theme function") : void 0;
          } else {
            var _theme = this.props.theme;
            true ? tiny_warning_esm_default(isObject(_theme), "[ThemeProvider] Please make your theme prop a plain object") : void 0;
            this.cachedTheme = outerTheme ? _extends3({}, outerTheme, _theme) : _theme;
          }
        }
        return this.cachedTheme;
      };
      _proto.render = function render() {
        var children = this.props.children;
        if (!children) {
          return null;
        }
        return import_react3.default.createElement(context.Consumer, null, this.renderProvider);
      };
      return ThemeProvider3;
    }(import_react3.default.Component);
    if (true) {
      ThemeProvider2.propTypes = {
        // eslint-disable-next-line react/require-default-props
        children: import_prop_types.default.node,
        theme: import_prop_types.default.oneOfType([import_prop_types.default.shape({}), import_prop_types.default.func]).isRequired
      };
    }
    return ThemeProvider2;
  }
  function createWithTheme(context) {
    return function hoc(Component) {
      var withTheme2 = import_react3.default.forwardRef(function(props, ref) {
        return import_react3.default.createElement(context.Consumer, null, function(theme) {
          true ? tiny_warning_esm_default(isObject(theme), "[theming] Please use withTheme only with the ThemeProvider") : void 0;
          return import_react3.default.createElement(Component, _extends3({
            theme,
            ref
          }, props));
        });
      });
      if (true) {
        withTheme2.displayName = "WithTheme(" + (0, import_react_display_name.default)(Component) + ")";
      }
      (0, import_hoist_non_react_statics.default)(withTheme2, Component);
      return withTheme2;
    };
  }
  function createUseTheme(context) {
    var useTheme2 = function useTheme3() {
      var theme = import_react3.default.useContext(context);
      true ? tiny_warning_esm_default(isObject(theme), "[theming] Please use useTheme only with the ThemeProvider") : void 0;
      return theme;
    };
    return useTheme2;
  }
  function createTheming(context) {
    return {
      context,
      withTheme: createWithTheme(context),
      useTheme: createUseTheme(context),
      ThemeProvider: createThemeProvider(context)
    };
  }
  var ThemeContext = (0, import_react3.createContext)();
  var _createTheming = createTheming(ThemeContext);
  var withTheme = _createTheming.withTheme;
  var ThemeProvider = _createTheming.ThemeProvider;
  var useTheme = _createTheming.useTheme;

  // node_modules/is-in-browser/dist/module.js
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" && document.nodeType === 9;
  var module_default = isBrowser;

  // node_modules/@babel/runtime/helpers/esm/typeof.js
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof2(o);
  }

  // node_modules/@babel/runtime/helpers/esm/toPrimitive.js
  function toPrimitive(t, r) {
    if ("object" != _typeof2(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof2(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }

  // node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof2(i) ? i : i + "";
  }

  // node_modules/@babel/runtime/helpers/esm/createClass.js
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }

  // node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
      return t2.__proto__ = e2, t2;
    }, _setPrototypeOf(t, e);
  }

  // node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
  function _inheritsLoose2(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
  }

  // node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
  function _assertThisInitialized2(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }

  // node_modules/jss/dist/jss.esm.js
  var plainObjectConstrurctor = {}.constructor;
  function cloneStyle(style) {
    if (style == null || typeof style !== "object") return style;
    if (Array.isArray(style)) return style.map(cloneStyle);
    if (style.constructor !== plainObjectConstrurctor) return style;
    var newStyle = {};
    for (var name in style) {
      newStyle[name] = cloneStyle(style[name]);
    }
    return newStyle;
  }
  function createRule(name, decl, options) {
    if (name === void 0) {
      name = "unnamed";
    }
    var jss = options.jss;
    var declCopy = cloneStyle(decl);
    var rule = jss.plugins.onCreateRule(name, declCopy, options);
    if (rule) return rule;
    if (name[0] === "@") {
      true ? tiny_warning_esm_default(false, "[JSS] Unknown rule " + name) : void 0;
    }
    return null;
  }
  var join = function join2(value, by) {
    var result2 = "";
    for (var i = 0; i < value.length; i++) {
      if (value[i] === "!important") break;
      if (result2) result2 += by;
      result2 += value[i];
    }
    return result2;
  };
  var toCssValue = function toCssValue2(value) {
    if (!Array.isArray(value)) return value;
    var cssValue = "";
    if (Array.isArray(value[0])) {
      for (var i = 0; i < value.length; i++) {
        if (value[i] === "!important") break;
        if (cssValue) cssValue += ", ";
        cssValue += join(value[i], " ");
      }
    } else cssValue = join(value, ", ");
    if (value[value.length - 1] === "!important") {
      cssValue += " !important";
    }
    return cssValue;
  };
  function getWhitespaceSymbols(options) {
    if (options && options.format === false) {
      return {
        linebreak: "",
        space: ""
      };
    }
    return {
      linebreak: "\n",
      space: " "
    };
  }
  function indentStr(str, indent) {
    var result2 = "";
    for (var index4 = 0; index4 < indent; index4++) {
      result2 += "  ";
    }
    return result2 + str;
  }
  function toCss(selector, style, options) {
    if (options === void 0) {
      options = {};
    }
    var result2 = "";
    if (!style) return result2;
    var _options = options, _options$indent = _options.indent, indent = _options$indent === void 0 ? 0 : _options$indent;
    var fallbacks = style.fallbacks;
    if (options.format === false) {
      indent = -Infinity;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak, space = _getWhitespaceSymbols.space;
    if (selector) indent++;
    if (fallbacks) {
      if (Array.isArray(fallbacks)) {
        for (var index4 = 0; index4 < fallbacks.length; index4++) {
          var fallback = fallbacks[index4];
          for (var prop in fallback) {
            var value = fallback[prop];
            if (value != null) {
              if (result2) result2 += linebreak;
              result2 += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
            }
          }
        }
      } else {
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];
          if (_value != null) {
            if (result2) result2 += linebreak;
            result2 += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
          }
        }
      }
    }
    for (var _prop2 in style) {
      var _value2 = style[_prop2];
      if (_value2 != null && _prop2 !== "fallbacks") {
        if (result2) result2 += linebreak;
        result2 += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
      }
    }
    if (!result2 && !options.allowEmpty) return result2;
    if (!selector) return result2;
    indent--;
    if (result2) result2 = "" + linebreak + result2 + linebreak;
    return indentStr("" + selector + space + "{" + result2, indent) + indentStr("}", indent);
  }
  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
  var nativeEscape = typeof CSS !== "undefined" && CSS.escape;
  var escape = function(str) {
    return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, "\\$1");
  };
  var BaseStyleRule = /* @__PURE__ */ function() {
    function BaseStyleRule2(key, style, options) {
      this.type = "style";
      this.isProcessed = false;
      var sheet = options.sheet, Renderer = options.Renderer;
      this.key = key;
      this.options = options;
      this.style = style;
      if (sheet) this.renderer = sheet.renderer;
      else if (Renderer) this.renderer = new Renderer();
    }
    var _proto = BaseStyleRule2.prototype;
    _proto.prop = function prop(name, value, options) {
      if (value === void 0) return this.style[name];
      var force = options ? options.force : false;
      if (!force && this.style[name] === value) return this;
      var newValue = value;
      if (!options || options.process !== false) {
        newValue = this.options.jss.plugins.onChangeValue(value, name, this);
      }
      var isEmpty = newValue == null || newValue === false;
      var isDefined = name in this.style;
      if (isEmpty && !isDefined && !force) return this;
      var remove = isEmpty && isDefined;
      if (remove) delete this.style[name];
      else this.style[name] = newValue;
      if (this.renderable && this.renderer) {
        if (remove) this.renderer.removeProperty(this.renderable, name);
        else this.renderer.setProperty(this.renderable, name, newValue);
        return this;
      }
      var sheet = this.options.sheet;
      if (sheet && sheet.attached) {
        true ? tiny_warning_esm_default(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : void 0;
      }
      return this;
    };
    return BaseStyleRule2;
  }();
  var StyleRule = /* @__PURE__ */ function(_BaseStyleRule) {
    _inheritsLoose2(StyleRule2, _BaseStyleRule);
    function StyleRule2(key, style, options) {
      var _this;
      _this = _BaseStyleRule.call(this, key, style, options) || this;
      var selector = options.selector, scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
      if (selector) {
        _this.selectorText = selector;
      } else if (scoped !== false) {
        _this.id = generateId(_assertThisInitialized2(_assertThisInitialized2(_this)), sheet);
        _this.selectorText = "." + escape(_this.id);
      }
      return _this;
    }
    var _proto2 = StyleRule2.prototype;
    _proto2.applyTo = function applyTo(renderable) {
      var renderer = this.renderer;
      if (renderer) {
        var json = this.toJSON();
        for (var prop in json) {
          renderer.setProperty(renderable, prop, json[prop]);
        }
      }
      return this;
    };
    _proto2.toJSON = function toJSON() {
      var json = {};
      for (var prop in this.style) {
        var value = this.style[prop];
        if (typeof value !== "object") json[prop] = value;
        else if (Array.isArray(value)) json[prop] = toCssValue(value);
      }
      return json;
    };
    _proto2.toString = function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends2({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.selectorText, this.style, opts);
    };
    _createClass(StyleRule2, [{
      key: "selector",
      set: function set(selector) {
        if (selector === this.selectorText) return;
        this.selectorText = selector;
        var renderer = this.renderer, renderable = this.renderable;
        if (!renderable || !renderer) return;
        var hasChanged = renderer.setSelector(renderable, selector);
        if (!hasChanged) {
          renderer.replaceRule(renderable, this);
        }
      },
      get: function get() {
        return this.selectorText;
      }
    }]);
    return StyleRule2;
  }(BaseStyleRule);
  var pluginStyleRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      if (key[0] === "@" || options.parent && options.parent.type === "keyframes") {
        return null;
      }
      return new StyleRule(key, style, options);
    }
  };
  var defaultToStringOptions = {
    indent: 1,
    children: true
  };
  var atRegExp = /@([\w-]+)/;
  var ConditionalRule = /* @__PURE__ */ function() {
    function ConditionalRule2(key, styles, options) {
      this.type = "conditional";
      this.isProcessed = false;
      this.key = key;
      var atMatch = key.match(atRegExp);
      this.at = atMatch ? atMatch[1] : "unknown";
      this.query = options.name || "@" + this.at;
      this.options = options;
      this.rules = new RuleList(_extends2({}, options, {
        parent: this
      }));
      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }
      this.rules.process();
    }
    var _proto = ConditionalRule2.prototype;
    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    };
    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    };
    _proto.addRule = function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      if (!rule) return null;
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    };
    _proto.replaceRule = function replaceRule(name, style, options) {
      var newRule = this.rules.replace(name, style, options);
      if (newRule) this.options.jss.plugins.onProcessRule(newRule);
      return newRule;
    };
    _proto.toString = function toString(options) {
      if (options === void 0) {
        options = defaultToStringOptions;
      }
      var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
      if (options.indent == null) options.indent = defaultToStringOptions.indent;
      if (options.children == null) options.children = defaultToStringOptions.children;
      if (options.children === false) {
        return this.query + " {}";
      }
      var children = this.rules.toString(options);
      return children ? this.query + " {" + linebreak + children + linebreak + "}" : "";
    };
    return ConditionalRule2;
  }();
  var keyRegExp = /@container|@media|@supports\s+/;
  var pluginConditionalRule = {
    onCreateRule: function onCreateRule2(key, styles, options) {
      return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
    }
  };
  var defaultToStringOptions$1 = {
    indent: 1,
    children: true
  };
  var nameRegExp = /@keyframes\s+([\w-]+)/;
  var KeyframesRule = /* @__PURE__ */ function() {
    function KeyframesRule2(key, frames, options) {
      this.type = "keyframes";
      this.at = "@keyframes";
      this.isProcessed = false;
      var nameMatch = key.match(nameRegExp);
      if (nameMatch && nameMatch[1]) {
        this.name = nameMatch[1];
      } else {
        this.name = "noname";
        true ? tiny_warning_esm_default(false, "[JSS] Bad keyframes name " + key) : void 0;
      }
      this.key = this.type + "-" + this.name;
      this.options = options;
      var scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
      this.id = scoped === false ? this.name : escape(generateId(this, sheet));
      this.rules = new RuleList(_extends2({}, options, {
        parent: this
      }));
      for (var name in frames) {
        this.rules.add(name, frames[name], _extends2({}, options, {
          parent: this
        }));
      }
      this.rules.process();
    }
    var _proto = KeyframesRule2.prototype;
    _proto.toString = function toString(options) {
      if (options === void 0) {
        options = defaultToStringOptions$1;
      }
      var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
      if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
      if (options.children == null) options.children = defaultToStringOptions$1.children;
      if (options.children === false) {
        return this.at + " " + this.id + " {}";
      }
      var children = this.rules.toString(options);
      if (children) children = "" + linebreak + children + linebreak;
      return this.at + " " + this.id + " {" + children + "}";
    };
    return KeyframesRule2;
  }();
  var keyRegExp$1 = /@keyframes\s+/;
  var refRegExp = /\$([\w-]+)/g;
  var findReferencedKeyframe = function findReferencedKeyframe2(val, keyframes) {
    if (typeof val === "string") {
      return val.replace(refRegExp, function(match, name) {
        if (name in keyframes) {
          return keyframes[name];
        }
        true ? tiny_warning_esm_default(false, '[JSS] Referenced keyframes rule "' + name + '" is not defined.') : void 0;
        return match;
      });
    }
    return val;
  };
  var replaceRef = function replaceRef2(style, prop, keyframes) {
    var value = style[prop];
    var refKeyframe = findReferencedKeyframe(value, keyframes);
    if (refKeyframe !== value) {
      style[prop] = refKeyframe;
    }
  };
  var pluginKeyframesRule = {
    onCreateRule: function onCreateRule3(key, frames, options) {
      return typeof key === "string" && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
    },
    // Animation name ref replacer.
    onProcessStyle: function onProcessStyle(style, rule, sheet) {
      if (rule.type !== "style" || !sheet) return style;
      if ("animation-name" in style) replaceRef(style, "animation-name", sheet.keyframes);
      if ("animation" in style) replaceRef(style, "animation", sheet.keyframes);
      return style;
    },
    onChangeValue: function onChangeValue(val, prop, rule) {
      var sheet = rule.options.sheet;
      if (!sheet) {
        return val;
      }
      switch (prop) {
        case "animation":
          return findReferencedKeyframe(val, sheet.keyframes);
        case "animation-name":
          return findReferencedKeyframe(val, sheet.keyframes);
        default:
          return val;
      }
    }
  };
  var KeyframeRule = /* @__PURE__ */ function(_BaseStyleRule) {
    _inheritsLoose2(KeyframeRule2, _BaseStyleRule);
    function KeyframeRule2() {
      return _BaseStyleRule.apply(this, arguments) || this;
    }
    var _proto = KeyframeRule2.prototype;
    _proto.toString = function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends2({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.key, this.style, opts);
    };
    return KeyframeRule2;
  }(BaseStyleRule);
  var pluginKeyframeRule = {
    onCreateRule: function onCreateRule4(key, style, options) {
      if (options.parent && options.parent.type === "keyframes") {
        return new KeyframeRule(key, style, options);
      }
      return null;
    }
  };
  var FontFaceRule = /* @__PURE__ */ function() {
    function FontFaceRule2(key, style, options) {
      this.type = "font-face";
      this.at = "@font-face";
      this.isProcessed = false;
      this.key = key;
      this.style = style;
      this.options = options;
    }
    var _proto = FontFaceRule2.prototype;
    _proto.toString = function toString(options) {
      var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
      if (Array.isArray(this.style)) {
        var str = "";
        for (var index4 = 0; index4 < this.style.length; index4++) {
          str += toCss(this.at, this.style[index4]);
          if (this.style[index4 + 1]) str += linebreak;
        }
        return str;
      }
      return toCss(this.at, this.style, options);
    };
    return FontFaceRule2;
  }();
  var keyRegExp$2 = /@font-face/;
  var pluginFontFaceRule = {
    onCreateRule: function onCreateRule5(key, style, options) {
      return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
    }
  };
  var ViewportRule = /* @__PURE__ */ function() {
    function ViewportRule2(key, style, options) {
      this.type = "viewport";
      this.at = "@viewport";
      this.isProcessed = false;
      this.key = key;
      this.style = style;
      this.options = options;
    }
    var _proto = ViewportRule2.prototype;
    _proto.toString = function toString(options) {
      return toCss(this.key, this.style, options);
    };
    return ViewportRule2;
  }();
  var pluginViewportRule = {
    onCreateRule: function onCreateRule6(key, style, options) {
      return key === "@viewport" || key === "@-ms-viewport" ? new ViewportRule(key, style, options) : null;
    }
  };
  var SimpleRule = /* @__PURE__ */ function() {
    function SimpleRule2(key, value, options) {
      this.type = "simple";
      this.isProcessed = false;
      this.key = key;
      this.value = value;
      this.options = options;
    }
    var _proto = SimpleRule2.prototype;
    _proto.toString = function toString(options) {
      if (Array.isArray(this.value)) {
        var str = "";
        for (var index4 = 0; index4 < this.value.length; index4++) {
          str += this.key + " " + this.value[index4] + ";";
          if (this.value[index4 + 1]) str += "\n";
        }
        return str;
      }
      return this.key + " " + this.value + ";";
    };
    return SimpleRule2;
  }();
  var keysMap = {
    "@charset": true,
    "@import": true,
    "@namespace": true
  };
  var pluginSimpleRule = {
    onCreateRule: function onCreateRule7(key, value, options) {
      return key in keysMap ? new SimpleRule(key, value, options) : null;
    }
  };
  var plugins = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
  var defaultUpdateOptions = {
    process: true
  };
  var forceUpdateOptions = {
    force: true,
    process: true
    /**
     * Contains rules objects and allows adding/removing etc.
     * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
     */
  };
  var RuleList = /* @__PURE__ */ function() {
    function RuleList2(options) {
      this.map = {};
      this.raw = {};
      this.index = [];
      this.counter = 0;
      this.options = options;
      this.classes = options.classes;
      this.keyframes = options.keyframes;
    }
    var _proto = RuleList2.prototype;
    _proto.add = function add(name, decl, ruleOptions) {
      var _this$options = this.options, parent = _this$options.parent, sheet = _this$options.sheet, jss = _this$options.jss, Renderer = _this$options.Renderer, generateId = _this$options.generateId, scoped = _this$options.scoped;
      var options = _extends2({
        classes: this.classes,
        parent,
        sheet,
        jss,
        Renderer,
        generateId,
        scoped,
        name,
        keyframes: this.keyframes,
        selector: void 0
      }, ruleOptions);
      var key = name;
      if (name in this.raw) {
        key = name + "-d" + this.counter++;
      }
      this.raw[key] = decl;
      if (key in this.classes) {
        options.selector = "." + escape(this.classes[key]);
      }
      var rule = createRule(key, decl, options);
      if (!rule) return null;
      this.register(rule);
      var index4 = options.index === void 0 ? this.index.length : options.index;
      this.index.splice(index4, 0, rule);
      return rule;
    };
    _proto.replace = function replace(name, decl, ruleOptions) {
      var oldRule = this.get(name);
      var oldIndex = this.index.indexOf(oldRule);
      if (oldRule) {
        this.remove(oldRule);
      }
      var options = ruleOptions;
      if (oldIndex !== -1) options = _extends2({}, ruleOptions, {
        index: oldIndex
      });
      return this.add(name, decl, options);
    };
    _proto.get = function get(nameOrSelector) {
      return this.map[nameOrSelector];
    };
    _proto.remove = function remove(rule) {
      this.unregister(rule);
      delete this.raw[rule.key];
      this.index.splice(this.index.indexOf(rule), 1);
    };
    _proto.indexOf = function indexOf(rule) {
      return this.index.indexOf(rule);
    };
    _proto.process = function process2() {
      var plugins3 = this.options.jss.plugins;
      this.index.slice(0).forEach(plugins3.onProcessRule, plugins3);
    };
    _proto.register = function register(rule) {
      this.map[rule.key] = rule;
      if (rule instanceof StyleRule) {
        this.map[rule.selector] = rule;
        if (rule.id) this.classes[rule.key] = rule.id;
      } else if (rule instanceof KeyframesRule && this.keyframes) {
        this.keyframes[rule.name] = rule.id;
      }
    };
    _proto.unregister = function unregister(rule) {
      delete this.map[rule.key];
      if (rule instanceof StyleRule) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      } else if (rule instanceof KeyframesRule) {
        delete this.keyframes[rule.name];
      }
    };
    _proto.update = function update() {
      var name;
      var data;
      var options;
      if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) === "string") {
        name = arguments.length <= 0 ? void 0 : arguments[0];
        data = arguments.length <= 1 ? void 0 : arguments[1];
        options = arguments.length <= 2 ? void 0 : arguments[2];
      } else {
        data = arguments.length <= 0 ? void 0 : arguments[0];
        options = arguments.length <= 1 ? void 0 : arguments[1];
        name = null;
      }
      if (name) {
        this.updateOne(this.get(name), data, options);
      } else {
        for (var index4 = 0; index4 < this.index.length; index4++) {
          this.updateOne(this.index[index4], data, options);
        }
      }
    };
    _proto.updateOne = function updateOne(rule, data, options) {
      if (options === void 0) {
        options = defaultUpdateOptions;
      }
      var _this$options2 = this.options, plugins3 = _this$options2.jss.plugins, sheet = _this$options2.sheet;
      if (rule.rules instanceof RuleList2) {
        rule.rules.update(data, options);
        return;
      }
      var style = rule.style;
      plugins3.onUpdate(data, rule, sheet, options);
      if (options.process && style && style !== rule.style) {
        plugins3.onProcessStyle(rule.style, rule, sheet);
        for (var prop in rule.style) {
          var nextValue = rule.style[prop];
          var prevValue = style[prop];
          if (nextValue !== prevValue) {
            rule.prop(prop, nextValue, forceUpdateOptions);
          }
        }
        for (var _prop in style) {
          var _nextValue = rule.style[_prop];
          var _prevValue = style[_prop];
          if (_nextValue == null && _nextValue !== _prevValue) {
            rule.prop(_prop, null, forceUpdateOptions);
          }
        }
      }
    };
    _proto.toString = function toString(options) {
      var str = "";
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
      for (var index4 = 0; index4 < this.index.length; index4++) {
        var rule = this.index[index4];
        var css3 = rule.toString(options);
        if (!css3 && !link) continue;
        if (str) str += linebreak;
        str += css3;
      }
      return str;
    };
    return RuleList2;
  }();
  var StyleSheet = /* @__PURE__ */ function() {
    function StyleSheet2(styles, options) {
      this.attached = false;
      this.deployed = false;
      this.classes = {};
      this.keyframes = {};
      this.options = _extends2({}, options, {
        sheet: this,
        parent: this,
        classes: this.classes,
        keyframes: this.keyframes
      });
      if (options.Renderer) {
        this.renderer = new options.Renderer(this);
      }
      this.rules = new RuleList(this.options);
      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }
      this.rules.process();
    }
    var _proto = StyleSheet2.prototype;
    _proto.attach = function attach() {
      if (this.attached) return this;
      if (this.renderer) this.renderer.attach();
      this.attached = true;
      if (!this.deployed) this.deploy();
      return this;
    };
    _proto.detach = function detach() {
      if (!this.attached) return this;
      if (this.renderer) this.renderer.detach();
      this.attached = false;
      return this;
    };
    _proto.addRule = function addRule(name, decl, options) {
      var queue = this.queue;
      if (this.attached && !queue) this.queue = [];
      var rule = this.rules.add(name, decl, options);
      if (!rule) return null;
      this.options.jss.plugins.onProcessRule(rule);
      if (this.attached) {
        if (!this.deployed) return rule;
        if (queue) queue.push(rule);
        else {
          this.insertRule(rule);
          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = void 0;
          }
        }
        return rule;
      }
      this.deployed = false;
      return rule;
    };
    _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
      var oldRule = this.rules.get(nameOrSelector);
      if (!oldRule) return this.addRule(nameOrSelector, decl, options);
      var newRule = this.rules.replace(nameOrSelector, decl, options);
      if (newRule) {
        this.options.jss.plugins.onProcessRule(newRule);
      }
      if (this.attached) {
        if (!this.deployed) return newRule;
        if (this.renderer) {
          if (!newRule) {
            this.renderer.deleteRule(oldRule);
          } else if (oldRule.renderable) {
            this.renderer.replaceRule(oldRule.renderable, newRule);
          }
        }
        return newRule;
      }
      this.deployed = false;
      return newRule;
    };
    _proto.insertRule = function insertRule2(rule) {
      if (this.renderer) {
        this.renderer.insertRule(rule);
      }
    };
    _proto.addRules = function addRules(styles, options) {
      var added = [];
      for (var name in styles) {
        var rule = this.addRule(name, styles[name], options);
        if (rule) added.push(rule);
      }
      return added;
    };
    _proto.getRule = function getRule(nameOrSelector) {
      return this.rules.get(nameOrSelector);
    };
    _proto.deleteRule = function deleteRule(name) {
      var rule = typeof name === "object" ? name : this.rules.get(name);
      if (!rule || // Style sheet was created without link: true and attached, in this case we
      // won't be able to remove the CSS rule from the DOM.
      this.attached && !rule.renderable) {
        return false;
      }
      this.rules.remove(rule);
      if (this.attached && rule.renderable && this.renderer) {
        return this.renderer.deleteRule(rule.renderable);
      }
      return true;
    };
    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    };
    _proto.deploy = function deploy() {
      if (this.renderer) this.renderer.deploy();
      this.deployed = true;
      return this;
    };
    _proto.update = function update() {
      var _this$rules;
      (_this$rules = this.rules).update.apply(_this$rules, arguments);
      return this;
    };
    _proto.updateOne = function updateOne(rule, data, options) {
      this.rules.updateOne(rule, data, options);
      return this;
    };
    _proto.toString = function toString(options) {
      return this.rules.toString(options);
    };
    return StyleSheet2;
  }();
  var PluginsRegistry = /* @__PURE__ */ function() {
    function PluginsRegistry2() {
      this.plugins = {
        internal: [],
        external: []
      };
      this.registry = {};
    }
    var _proto = PluginsRegistry2.prototype;
    _proto.onCreateRule = function onCreateRule8(name, decl, options) {
      for (var i = 0; i < this.registry.onCreateRule.length; i++) {
        var rule = this.registry.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }
      return null;
    };
    _proto.onProcessRule = function onProcessRule3(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;
      for (var i = 0; i < this.registry.onProcessRule.length; i++) {
        this.registry.onProcessRule[i](rule, sheet);
      }
      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
      rule.isProcessed = true;
    };
    _proto.onProcessStyle = function onProcessStyle2(style, rule, sheet) {
      for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
        rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
      }
    };
    _proto.onProcessSheet = function onProcessSheet(sheet) {
      for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
        this.registry.onProcessSheet[i](sheet);
      }
    };
    _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
      for (var i = 0; i < this.registry.onUpdate.length; i++) {
        this.registry.onUpdate[i](data, rule, sheet, options);
      }
    };
    _proto.onChangeValue = function onChangeValue2(value, prop, rule) {
      var processedValue = value;
      for (var i = 0; i < this.registry.onChangeValue.length; i++) {
        processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
      }
      return processedValue;
    };
    _proto.use = function use(newPlugin, options) {
      if (options === void 0) {
        options = {
          queue: "external"
        };
      }
      var plugins3 = this.plugins[options.queue];
      if (plugins3.indexOf(newPlugin) !== -1) {
        return;
      }
      plugins3.push(newPlugin);
      this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(registry, plugin) {
        for (var name in plugin) {
          if (name in registry) {
            registry[name].push(plugin[name]);
          } else {
            true ? tiny_warning_esm_default(false, '[JSS] Unknown hook "' + name + '".') : void 0;
          }
        }
        return registry;
      }, {
        onCreateRule: [],
        onProcessRule: [],
        onProcessStyle: [],
        onProcessSheet: [],
        onChangeValue: [],
        onUpdate: []
      });
    };
    return PluginsRegistry2;
  }();
  var SheetsRegistry = /* @__PURE__ */ function() {
    function SheetsRegistry2() {
      this.registry = [];
    }
    var _proto = SheetsRegistry2.prototype;
    _proto.add = function add(sheet) {
      var registry = this.registry;
      var index4 = sheet.options.index;
      if (registry.indexOf(sheet) !== -1) return;
      if (registry.length === 0 || index4 >= this.index) {
        registry.push(sheet);
        return;
      }
      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index4) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    };
    _proto.reset = function reset() {
      this.registry = [];
    };
    _proto.remove = function remove(sheet) {
      var index4 = this.registry.indexOf(sheet);
      this.registry.splice(index4, 1);
    };
    _proto.toString = function toString(_temp) {
      var _ref = _temp === void 0 ? {} : _temp, attached = _ref.attached, options = _objectWithoutPropertiesLoose2(_ref, ["attached"]);
      var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
      var css3 = "";
      for (var i = 0; i < this.registry.length; i++) {
        var sheet = this.registry[i];
        if (attached != null && sheet.attached !== attached) {
          continue;
        }
        if (css3) css3 += linebreak;
        css3 += sheet.toString(options);
      }
      return css3;
    };
    _createClass(SheetsRegistry2, [{
      key: "index",
      /**
       * Current highest index number.
       */
      get: function get() {
        return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
      }
    }]);
    return SheetsRegistry2;
  }();
  var sheets = new SheetsRegistry();
  var globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
  var ns = "2f1acc6c3a606b082e5eef5e54414ffb";
  if (globalThis$1[ns] == null) globalThis$1[ns] = 0;
  var moduleId = globalThis$1[ns]++;
  var maxRules = 1e10;
  var createGenerateId = function createGenerateId2(options) {
    if (options === void 0) {
      options = {};
    }
    var ruleCounter = 0;
    var generateId = function generateId2(rule, sheet) {
      ruleCounter += 1;
      if (ruleCounter > maxRules) {
        true ? tiny_warning_esm_default(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : void 0;
      }
      var jssId = "";
      var prefix2 = "";
      if (sheet) {
        if (sheet.options.classNamePrefix) {
          prefix2 = sheet.options.classNamePrefix;
        }
        if (sheet.options.jss.id != null) {
          jssId = String(sheet.options.jss.id);
        }
      }
      if (options.minify) {
        return "" + (prefix2 || "c") + moduleId + jssId + ruleCounter;
      }
      return prefix2 + rule.key + "-" + moduleId + (jssId ? "-" + jssId : "") + "-" + ruleCounter;
    };
    return generateId;
  };
  var memoize = function memoize2(fn) {
    var value;
    return function() {
      if (!value) value = fn();
      return value;
    };
  };
  var getPropertyValue = function getPropertyValue2(cssRule, prop) {
    try {
      if (cssRule.attributeStyleMap) {
        return cssRule.attributeStyleMap.get(prop);
      }
      return cssRule.style.getPropertyValue(prop);
    } catch (err) {
      return "";
    }
  };
  var setProperty = function setProperty2(cssRule, prop, value) {
    try {
      var cssValue = value;
      if (Array.isArray(value)) {
        cssValue = toCssValue(value);
      }
      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.set(prop, cssValue);
      } else {
        var indexOfImportantFlag = cssValue ? cssValue.indexOf("!important") : -1;
        var cssValueWithoutImportantFlag = indexOfImportantFlag > -1 ? cssValue.substr(0, indexOfImportantFlag - 1) : cssValue;
        cssRule.style.setProperty(prop, cssValueWithoutImportantFlag, indexOfImportantFlag > -1 ? "important" : "");
      }
    } catch (err) {
      return false;
    }
    return true;
  };
  var removeProperty = function removeProperty2(cssRule, prop) {
    try {
      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.delete(prop);
      } else {
        cssRule.style.removeProperty(prop);
      }
    } catch (err) {
      true ? tiny_warning_esm_default(false, '[JSS] DOMException "' + err.message + '" was thrown. Tried to remove property "' + prop + '".') : void 0;
    }
  };
  var setSelector = function setSelector2(cssRule, selectorText) {
    cssRule.selectorText = selectorText;
    return cssRule.selectorText === selectorText;
  };
  var getHead = memoize(function() {
    return document.querySelector("head");
  });
  function findHigherSheet(registry, options) {
    for (var i = 0; i < registry.length; i++) {
      var sheet = registry[i];
      if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }
    return null;
  }
  function findHighestSheet(registry, options) {
    for (var i = registry.length - 1; i >= 0; i--) {
      var sheet = registry[i];
      if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }
    return null;
  }
  function findCommentNode(text) {
    var head = getHead();
    for (var i = 0; i < head.childNodes.length; i++) {
      var node = head.childNodes[i];
      if (node.nodeType === 8 && node.nodeValue.trim() === text) {
        return node;
      }
    }
    return null;
  }
  function findPrevNode(options) {
    var registry = sheets.registry;
    if (registry.length > 0) {
      var sheet = findHigherSheet(registry, options);
      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element
        };
      }
      sheet = findHighestSheet(registry, options);
      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element.nextSibling
        };
      }
    }
    var insertionPoint = options.insertionPoint;
    if (insertionPoint && typeof insertionPoint === "string") {
      var comment = findCommentNode(insertionPoint);
      if (comment) {
        return {
          parent: comment.parentNode,
          node: comment.nextSibling
        };
      }
      true ? tiny_warning_esm_default(false, '[JSS] Insertion point "' + insertionPoint + '" not found.') : void 0;
    }
    return false;
  }
  function insertStyle(style, options) {
    var insertionPoint = options.insertionPoint;
    var nextNode = findPrevNode(options);
    if (nextNode !== false && nextNode.parent) {
      nextNode.parent.insertBefore(style, nextNode.node);
      return;
    }
    if (insertionPoint && typeof insertionPoint.nodeType === "number") {
      var insertionPointElement = insertionPoint;
      var parentNode = insertionPointElement.parentNode;
      if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);
      else true ? tiny_warning_esm_default(false, "[JSS] Insertion point is not in the DOM.") : void 0;
      return;
    }
    getHead().appendChild(style);
  }
  var getNonce = memoize(function() {
    var node = document.querySelector('meta[property="csp-nonce"]');
    return node ? node.getAttribute("content") : null;
  });
  var _insertRule = function insertRule(container, rule, index4) {
    try {
      if ("insertRule" in container) {
        container.insertRule(rule, index4);
      } else if ("appendRule" in container) {
        container.appendRule(rule);
      }
    } catch (err) {
      true ? tiny_warning_esm_default(false, "[JSS] " + err.message) : void 0;
      return false;
    }
    return container.cssRules[index4];
  };
  var getValidRuleInsertionIndex = function getValidRuleInsertionIndex2(container, index4) {
    var maxIndex = container.cssRules.length;
    if (index4 === void 0 || index4 > maxIndex) {
      return maxIndex;
    }
    return index4;
  };
  var createStyle = function createStyle2() {
    var el2 = document.createElement("style");
    el2.textContent = "\n";
    return el2;
  };
  var DomRenderer = /* @__PURE__ */ function() {
    function DomRenderer2(sheet) {
      this.getPropertyValue = getPropertyValue;
      this.setProperty = setProperty;
      this.removeProperty = removeProperty;
      this.setSelector = setSelector;
      this.hasInsertedRules = false;
      this.cssRules = [];
      if (sheet) sheets.add(sheet);
      this.sheet = sheet;
      var _ref = this.sheet ? this.sheet.options : {}, media = _ref.media, meta = _ref.meta, element = _ref.element;
      this.element = element || createStyle();
      this.element.setAttribute("data-jss", "");
      if (media) this.element.setAttribute("media", media);
      if (meta) this.element.setAttribute("data-meta", meta);
      var nonce = getNonce();
      if (nonce) this.element.setAttribute("nonce", nonce);
    }
    var _proto = DomRenderer2.prototype;
    _proto.attach = function attach() {
      if (this.element.parentNode || !this.sheet) return;
      insertStyle(this.element, this.sheet.options);
      var deployed = Boolean(this.sheet && this.sheet.deployed);
      if (this.hasInsertedRules && deployed) {
        this.hasInsertedRules = false;
        this.deploy();
      }
    };
    _proto.detach = function detach() {
      if (!this.sheet) return;
      var parentNode = this.element.parentNode;
      if (parentNode) parentNode.removeChild(this.element);
      if (this.sheet.options.link) {
        this.cssRules = [];
        this.element.textContent = "\n";
      }
    };
    _proto.deploy = function deploy() {
      var sheet = this.sheet;
      if (!sheet) return;
      if (sheet.options.link) {
        this.insertRules(sheet.rules);
        return;
      }
      this.element.textContent = "\n" + sheet.toString() + "\n";
    };
    _proto.insertRules = function insertRules(rules, nativeParent) {
      for (var i = 0; i < rules.index.length; i++) {
        this.insertRule(rules.index[i], i, nativeParent);
      }
    };
    _proto.insertRule = function insertRule2(rule, index4, nativeParent) {
      if (nativeParent === void 0) {
        nativeParent = this.element.sheet;
      }
      if (rule.rules) {
        var parent = rule;
        var latestNativeParent = nativeParent;
        if (rule.type === "conditional" || rule.type === "keyframes") {
          var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index4);
          latestNativeParent = _insertRule(nativeParent, parent.toString({
            children: false
          }), _insertionIndex);
          if (latestNativeParent === false) {
            return false;
          }
          this.refCssRule(rule, _insertionIndex, latestNativeParent);
        }
        this.insertRules(parent.rules, latestNativeParent);
        return latestNativeParent;
      }
      var ruleStr = rule.toString();
      if (!ruleStr) return false;
      var insertionIndex = getValidRuleInsertionIndex(nativeParent, index4);
      var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);
      if (nativeRule === false) {
        return false;
      }
      this.hasInsertedRules = true;
      this.refCssRule(rule, insertionIndex, nativeRule);
      return nativeRule;
    };
    _proto.refCssRule = function refCssRule(rule, index4, cssRule) {
      rule.renderable = cssRule;
      if (rule.options.parent instanceof StyleSheet) {
        this.cssRules.splice(index4, 0, cssRule);
      }
    };
    _proto.deleteRule = function deleteRule(cssRule) {
      var sheet = this.element.sheet;
      var index4 = this.indexOf(cssRule);
      if (index4 === -1) return false;
      sheet.deleteRule(index4);
      this.cssRules.splice(index4, 1);
      return true;
    };
    _proto.indexOf = function indexOf(cssRule) {
      return this.cssRules.indexOf(cssRule);
    };
    _proto.replaceRule = function replaceRule(cssRule, rule) {
      var index4 = this.indexOf(cssRule);
      if (index4 === -1) return false;
      this.element.sheet.deleteRule(index4);
      this.cssRules.splice(index4, 1);
      return this.insertRule(rule, index4);
    };
    _proto.getRules = function getRules() {
      return this.element.sheet.cssRules;
    };
    return DomRenderer2;
  }();
  var instanceCounter = 0;
  var Jss = /* @__PURE__ */ function() {
    function Jss2(options) {
      this.id = instanceCounter++;
      this.version = "10.10.0";
      this.plugins = new PluginsRegistry();
      this.options = {
        id: {
          minify: false
        },
        createGenerateId,
        Renderer: module_default ? DomRenderer : null,
        plugins: []
      };
      this.generateId = createGenerateId({
        minify: false
      });
      for (var i = 0; i < plugins.length; i++) {
        this.plugins.use(plugins[i], {
          queue: "internal"
        });
      }
      this.setup(options);
    }
    var _proto = Jss2.prototype;
    _proto.setup = function setup(options) {
      if (options === void 0) {
        options = {};
      }
      if (options.createGenerateId) {
        this.options.createGenerateId = options.createGenerateId;
      }
      if (options.id) {
        this.options.id = _extends2({}, this.options.id, options.id);
      }
      if (options.createGenerateId || options.id) {
        this.generateId = this.options.createGenerateId(this.options.id);
      }
      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;
      if ("Renderer" in options) {
        this.options.Renderer = options.Renderer;
      }
      if (options.plugins) this.use.apply(this, options.plugins);
      return this;
    };
    _proto.createStyleSheet = function createStyleSheet3(styles, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, index4 = _options.index;
      if (typeof index4 !== "number") {
        index4 = sheets.index === 0 ? 0 : sheets.index + 1;
      }
      var sheet = new StyleSheet(styles, _extends2({}, options, {
        jss: this,
        generateId: options.generateId || this.generateId,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index4
      }));
      this.plugins.onProcessSheet(sheet);
      return sheet;
    };
    _proto.removeStyleSheet = function removeStyleSheet(sheet) {
      sheet.detach();
      sheets.remove(sheet);
      return this;
    };
    _proto.createRule = function createRule$1(name, style, options) {
      if (style === void 0) {
        style = {};
      }
      if (options === void 0) {
        options = {};
      }
      if (typeof name === "object") {
        return this.createRule(void 0, name, style);
      }
      var ruleOptions = _extends2({}, options, {
        name,
        jss: this,
        Renderer: this.options.Renderer
      });
      if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      if (!ruleOptions.keyframes) ruleOptions.keyframes = {};
      var rule = createRule(name, style, ruleOptions);
      if (rule) this.plugins.onProcessRule(rule);
      return rule;
    };
    _proto.use = function use() {
      var _this = this;
      for (var _len = arguments.length, plugins3 = new Array(_len), _key = 0; _key < _len; _key++) {
        plugins3[_key] = arguments[_key];
      }
      plugins3.forEach(function(plugin) {
        _this.plugins.use(plugin);
      });
      return this;
    };
    return Jss2;
  }();
  var createJss = function createJss2(options) {
    return new Jss(options);
  };
  var SheetsManager = /* @__PURE__ */ function() {
    function SheetsManager2() {
      this.length = 0;
      this.sheets = /* @__PURE__ */ new WeakMap();
    }
    var _proto = SheetsManager2.prototype;
    _proto.get = function get(key) {
      var entry = this.sheets.get(key);
      return entry && entry.sheet;
    };
    _proto.add = function add(key, sheet) {
      if (this.sheets.has(key)) return;
      this.length++;
      this.sheets.set(key, {
        sheet,
        refs: 0
      });
    };
    _proto.manage = function manage(key) {
      var entry = this.sheets.get(key);
      if (entry) {
        if (entry.refs === 0) {
          entry.sheet.attach();
        }
        entry.refs++;
        return entry.sheet;
      }
      tiny_warning_esm_default(false, "[JSS] SheetsManager: can't find sheet to manage");
      return void 0;
    };
    _proto.unmanage = function unmanage(key) {
      var entry = this.sheets.get(key);
      if (entry) {
        if (entry.refs > 0) {
          entry.refs--;
          if (entry.refs === 0) entry.sheet.detach();
        }
      } else {
        tiny_warning_esm_default(false, "SheetsManager: can't find sheet to unmanage");
      }
    };
    _createClass(SheetsManager2, [{
      key: "size",
      get: function get() {
        return this.length;
      }
    }]);
    return SheetsManager2;
  }();
  var hasCSSTOMSupport = typeof CSS === "object" && CSS != null && "number" in CSS;
  function getDynamicStyles(styles) {
    var to = null;
    for (var key in styles) {
      var value = styles[key];
      var type = typeof value;
      if (type === "function") {
        if (!to) to = {};
        to[key] = value;
      } else if (type === "object" && value !== null && !Array.isArray(value)) {
        var extracted = getDynamicStyles(value);
        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }
    return to;
  }
  var index = createJss();

  // node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js
  var now = Date.now();
  var fnValuesNs = "fnValues" + now;
  var fnRuleNs = "fnStyle" + ++now;
  var functionPlugin = function functionPlugin2() {
    return {
      onCreateRule: function onCreateRule8(name, decl, options) {
        if (typeof decl !== "function") return null;
        var rule = createRule(name, {}, options);
        rule[fnRuleNs] = decl;
        return rule;
      },
      onProcessStyle: function onProcessStyle2(style, rule) {
        if (fnValuesNs in rule || fnRuleNs in rule) return style;
        var fnValues = {};
        for (var prop in style) {
          var value = style[prop];
          if (typeof value !== "function") continue;
          delete style[prop];
          fnValues[prop] = value;
        }
        rule[fnValuesNs] = fnValues;
        return style;
      },
      onUpdate: function onUpdate(data, rule, sheet, options) {
        var styleRule = rule;
        var fnRule = styleRule[fnRuleNs];
        if (fnRule) {
          styleRule.style = fnRule(data) || {};
          if (true) {
            for (var prop in styleRule.style) {
              if (typeof styleRule.style[prop] === "function") {
                true ? tiny_warning_esm_default(false, "[JSS] Function values inside function rules are not supported.") : void 0;
                break;
              }
            }
          }
        }
        var fnValues = styleRule[fnValuesNs];
        if (fnValues) {
          for (var _prop in fnValues) {
            styleRule.prop(_prop, fnValues[_prop](data), options);
          }
        }
      }
    };
  };
  var jss_plugin_rule_value_function_esm_default = functionPlugin;

  // node_modules/symbol-observable/es/ponyfill.js
  function symbolObservablePonyfill(root2) {
    var result2;
    var Symbol2 = root2.Symbol;
    if (typeof Symbol2 === "function") {
      if (Symbol2.observable) {
        result2 = Symbol2.observable;
      } else {
        result2 = Symbol2("observable");
        Symbol2.observable = result2;
      }
    } else {
      result2 = "@@observable";
    }
    return result2;
  }

  // node_modules/symbol-observable/es/index.js
  var root;
  if (typeof self !== "undefined") {
    root = self;
  } else if (typeof window !== "undefined") {
    root = window;
  } else if (typeof global !== "undefined") {
    root = global;
  } else if (typeof module !== "undefined") {
    root = module;
  } else {
    root = Function("return this")();
  }
  var result = symbolObservablePonyfill(root);
  var es_default = result;

  // node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js
  var isObservable = function isObservable2(value) {
    return value && value[es_default] && value === value[es_default]();
  };
  var observablePlugin = function observablePlugin2(updateOptions) {
    return {
      onCreateRule: function onCreateRule8(name, decl, options) {
        if (!isObservable(decl)) return null;
        var style$ = decl;
        var rule = createRule(name, {}, options);
        style$.subscribe(function(style) {
          for (var prop in style) {
            rule.prop(prop, style[prop], updateOptions);
          }
        });
        return rule;
      },
      onProcessRule: function onProcessRule3(rule) {
        if (rule && rule.type !== "style") return;
        var styleRule = rule;
        var style = styleRule.style;
        var _loop = function _loop2(prop2) {
          var value = style[prop2];
          if (!isObservable(value)) return "continue";
          delete style[prop2];
          value.subscribe({
            next: function next(nextValue) {
              styleRule.prop(prop2, nextValue, updateOptions);
            }
          });
        };
        for (var prop in style) {
          var _ret = _loop(prop);
          if (_ret === "continue") continue;
        }
      }
    };
  };
  var jss_plugin_rule_value_observable_esm_default = observablePlugin;

  // node_modules/jss-plugin-template/dist/jss-plugin-template.esm.js
  var semiWithNl = /;\n/;
  var parse = function parse2(cssText) {
    var style = {};
    var split = cssText.split(semiWithNl);
    for (var i = 0; i < split.length; i++) {
      var decl = (split[i] || "").trim();
      if (!decl) continue;
      var colonIndex = decl.indexOf(":");
      if (colonIndex === -1) {
        true ? tiny_warning_esm_default(false, '[JSS] Malformed CSS string "' + decl + '"') : void 0;
        continue;
      }
      var prop = decl.substr(0, colonIndex).trim();
      var value = decl.substr(colonIndex + 1).trim();
      style[prop] = value;
    }
    return style;
  };
  var onProcessRule = function onProcessRule2(rule) {
    if (typeof rule.style === "string") {
      rule.style = parse(rule.style);
    }
  };
  function templatePlugin() {
    return {
      onProcessRule
    };
  }
  var jss_plugin_template_esm_default = templatePlugin;

  // node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js
  var at = "@global";
  var atPrefix = "@global ";
  var GlobalContainerRule = /* @__PURE__ */ function() {
    function GlobalContainerRule2(key, styles, options) {
      this.type = "global";
      this.at = at;
      this.isProcessed = false;
      this.key = key;
      this.options = options;
      this.rules = new RuleList(_extends2({}, options, {
        parent: this
      }));
      for (var selector in styles) {
        this.rules.add(selector, styles[selector]);
      }
      this.rules.process();
    }
    var _proto = GlobalContainerRule2.prototype;
    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    };
    _proto.addRule = function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      if (rule) this.options.jss.plugins.onProcessRule(rule);
      return rule;
    };
    _proto.replaceRule = function replaceRule(name, style, options) {
      var newRule = this.rules.replace(name, style, options);
      if (newRule) this.options.jss.plugins.onProcessRule(newRule);
      return newRule;
    };
    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    };
    _proto.toString = function toString(options) {
      return this.rules.toString(options);
    };
    return GlobalContainerRule2;
  }();
  var GlobalPrefixedRule = /* @__PURE__ */ function() {
    function GlobalPrefixedRule2(key, style, options) {
      this.type = "global";
      this.at = at;
      this.isProcessed = false;
      this.key = key;
      this.options = options;
      var selector = key.substr(atPrefix.length);
      this.rule = options.jss.createRule(selector, style, _extends2({}, options, {
        parent: this
      }));
    }
    var _proto2 = GlobalPrefixedRule2.prototype;
    _proto2.toString = function toString(options) {
      return this.rule ? this.rule.toString(options) : "";
    };
    return GlobalPrefixedRule2;
  }();
  var separatorRegExp = /\s*,\s*/g;
  function addScope(selector, scope) {
    var parts = selector.split(separatorRegExp);
    var scoped = "";
    for (var i = 0; i < parts.length; i++) {
      scoped += scope + " " + parts[i].trim();
      if (parts[i + 1]) scoped += ", ";
    }
    return scoped;
  }
  function handleNestedGlobalContainerRule(rule, sheet) {
    var options = rule.options, style = rule.style;
    var rules = style ? style[at] : null;
    if (!rules) return;
    for (var name in rules) {
      sheet.addRule(name, rules[name], _extends2({}, options, {
        selector: addScope(name, rule.selector)
      }));
    }
    delete style[at];
  }
  function handlePrefixedGlobalRule(rule, sheet) {
    var options = rule.options, style = rule.style;
    for (var prop in style) {
      if (prop[0] !== "@" || prop.substr(0, at.length) !== at) continue;
      var selector = addScope(prop.substr(at.length), rule.selector);
      sheet.addRule(selector, style[prop], _extends2({}, options, {
        selector
      }));
      delete style[prop];
    }
  }
  function jssGlobal() {
    function onCreateRule8(name, styles, options) {
      if (!name) return null;
      if (name === at) {
        return new GlobalContainerRule(name, styles, options);
      }
      if (name[0] === "@" && name.substr(0, atPrefix.length) === atPrefix) {
        return new GlobalPrefixedRule(name, styles, options);
      }
      var parent = options.parent;
      if (parent) {
        if (parent.type === "global" || parent.options.parent && parent.options.parent.type === "global") {
          options.scoped = false;
        }
      }
      if (!options.selector && options.scoped === false) {
        options.selector = name;
      }
      return null;
    }
    function onProcessRule3(rule, sheet) {
      if (rule.type !== "style" || !sheet) return;
      handleNestedGlobalContainerRule(rule, sheet);
      handlePrefixedGlobalRule(rule, sheet);
    }
    return {
      onCreateRule: onCreateRule8,
      onProcessRule: onProcessRule3
    };
  }
  var jss_plugin_global_esm_default = jssGlobal;

  // node_modules/jss-plugin-extend/dist/jss-plugin-extend.esm.js
  var isObject2 = function isObject3(obj) {
    return obj && typeof obj === "object" && !Array.isArray(obj);
  };
  var valueNs = "extendCurrValue" + Date.now();
  function mergeExtend(style, rule, sheet, newStyle) {
    var extendType = typeof style.extend;
    if (extendType === "string") {
      if (!sheet) return;
      var refRule = sheet.getRule(style.extend);
      if (!refRule) return;
      if (refRule === rule) {
        true ? tiny_warning_esm_default(false, "[JSS] A rule tries to extend itself \n" + rule.toString()) : void 0;
        return;
      }
      var parent = refRule.options.parent;
      if (parent) {
        var originalStyle = parent.rules.raw[style.extend];
        extend(originalStyle, rule, sheet, newStyle);
      }
      return;
    }
    if (Array.isArray(style.extend)) {
      for (var index4 = 0; index4 < style.extend.length; index4++) {
        var singleExtend = style.extend[index4];
        var singleStyle = typeof singleExtend === "string" ? _extends2({}, style, {
          extend: singleExtend
        }) : style.extend[index4];
        extend(singleStyle, rule, sheet, newStyle);
      }
      return;
    }
    for (var prop in style.extend) {
      if (prop === "extend") {
        extend(style.extend.extend, rule, sheet, newStyle);
        continue;
      }
      if (isObject2(style.extend[prop])) {
        if (!(prop in newStyle)) newStyle[prop] = {};
        extend(style.extend[prop], rule, sheet, newStyle[prop]);
        continue;
      }
      newStyle[prop] = style.extend[prop];
    }
  }
  function mergeRest(style, rule, sheet, newStyle) {
    for (var prop in style) {
      if (prop === "extend") continue;
      if (isObject2(newStyle[prop]) && isObject2(style[prop])) {
        extend(style[prop], rule, sheet, newStyle[prop]);
        continue;
      }
      if (isObject2(style[prop])) {
        newStyle[prop] = extend(style[prop], rule, sheet);
        continue;
      }
      newStyle[prop] = style[prop];
    }
  }
  function extend(style, rule, sheet, newStyle) {
    if (newStyle === void 0) {
      newStyle = {};
    }
    mergeExtend(style, rule, sheet, newStyle);
    mergeRest(style, rule, sheet, newStyle);
    return newStyle;
  }
  function jssExtend() {
    function onProcessStyle2(style, rule, sheet) {
      if ("extend" in style) return extend(style, rule, sheet);
      return style;
    }
    function onChangeValue2(value, prop, rule) {
      if (prop !== "extend") return value;
      if (value == null || value === false) {
        for (var key in rule[valueNs]) {
          rule.prop(key, null);
        }
        rule[valueNs] = null;
        return null;
      }
      if (typeof value === "object") {
        for (var _key in value) {
          rule.prop(_key, value[_key]);
        }
        rule[valueNs] = value;
      }
      return null;
    }
    return {
      onProcessStyle: onProcessStyle2,
      onChangeValue: onChangeValue2
    };
  }
  var jss_plugin_extend_esm_default = jssExtend;

  // node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js
  var separatorRegExp2 = /\s*,\s*/g;
  var parentRegExp = /&/g;
  var refRegExp2 = /\$([\w-]+)/g;
  function jssNested() {
    function getReplaceRef(container, sheet) {
      return function(match, key) {
        var rule = container.getRule(key) || sheet && sheet.getRule(key);
        if (rule) {
          return rule.selector;
        }
        true ? tiny_warning_esm_default(false, '[JSS] Could not find the referenced rule "' + key + '" in "' + (container.options.meta || container.toString()) + '".') : void 0;
        return key;
      };
    }
    function replaceParentRefs(nestedProp, parentProp) {
      var parentSelectors = parentProp.split(separatorRegExp2);
      var nestedSelectors = nestedProp.split(separatorRegExp2);
      var result2 = "";
      for (var i = 0; i < parentSelectors.length; i++) {
        var parent = parentSelectors[i];
        for (var j = 0; j < nestedSelectors.length; j++) {
          var nested = nestedSelectors[j];
          if (result2) result2 += ", ";
          result2 += nested.indexOf("&") !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
        }
      }
      return result2;
    }
    function getOptions(rule, container, prevOptions) {
      if (prevOptions) return _extends2({}, prevOptions, {
        index: prevOptions.index + 1
      });
      var nestingLevel = rule.options.nestingLevel;
      nestingLevel = nestingLevel === void 0 ? 1 : nestingLevel + 1;
      var options = _extends2({}, rule.options, {
        nestingLevel,
        index: container.indexOf(rule) + 1
        // We don't need the parent name to be set options for chlid.
      });
      delete options.name;
      return options;
    }
    function onProcessStyle2(style, rule, sheet) {
      if (rule.type !== "style") return style;
      var styleRule = rule;
      var container = styleRule.options.parent;
      var options;
      var replaceRef3;
      for (var prop in style) {
        var isNested = prop.indexOf("&") !== -1;
        var isNestedConditional = prop[0] === "@";
        if (!isNested && !isNestedConditional) continue;
        options = getOptions(styleRule, container, options);
        if (isNested) {
          var selector = replaceParentRefs(prop, styleRule.selector);
          if (!replaceRef3) replaceRef3 = getReplaceRef(container, sheet);
          selector = selector.replace(refRegExp2, replaceRef3);
          var name = styleRule.key + "-" + prop;
          if ("replaceRule" in container) {
            container.replaceRule(name, style[prop], _extends2({}, options, {
              selector
            }));
          } else {
            container.addRule(name, style[prop], _extends2({}, options, {
              selector
            }));
          }
        } else if (isNestedConditional) {
          container.addRule(prop, {}, options).addRule(styleRule.key, style[prop], {
            selector: styleRule.selector
          });
        }
        delete style[prop];
      }
      return style;
    }
    return {
      onProcessStyle: onProcessStyle2
    };
  }
  var jss_plugin_nested_esm_default = jssNested;

  // node_modules/jss-plugin-compose/dist/jss-plugin-compose.esm.js
  function registerClass(rule, className) {
    if (!className) return true;
    if (Array.isArray(className)) {
      for (var index4 = 0; index4 < className.length; index4++) {
        var isSetted = registerClass(rule, className[index4]);
        if (!isSetted) return false;
      }
      return true;
    }
    if (className.indexOf(" ") > -1) {
      return registerClass(rule, className.split(" "));
    }
    var parent = rule.options.parent;
    if (className[0] === "$") {
      var refRule = parent.getRule(className.substr(1));
      if (!refRule) {
        true ? tiny_warning_esm_default(false, "[JSS] Referenced rule is not defined. \n" + rule.toString()) : void 0;
        return false;
      }
      if (refRule === rule) {
        true ? tiny_warning_esm_default(false, "[JSS] Cyclic composition detected. \n" + rule.toString()) : void 0;
        return false;
      }
      parent.classes[rule.key] += " " + parent.classes[refRule.key];
      return true;
    }
    parent.classes[rule.key] += " " + className;
    return true;
  }
  function jssCompose() {
    function onProcessStyle2(style, rule) {
      if (!("composes" in style)) return style;
      registerClass(rule, style.composes);
      delete style.composes;
      return style;
    }
    return {
      onProcessStyle: onProcessStyle2
    };
  }
  var jss_plugin_compose_esm_default = jssCompose;

  // node_modules/hyphenate-style-name/index.js
  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache = {};
  function toHyphenLower(match) {
    return "-" + match.toLowerCase();
  }
  function hyphenateStyleName(name) {
    if (cache.hasOwnProperty(name)) {
      return cache[name];
    }
    var hName = name.replace(uppercasePattern, toHyphenLower);
    return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
  }
  var hyphenate_style_name_default = hyphenateStyleName;

  // node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js
  function convertCase(style) {
    var converted = {};
    for (var prop in style) {
      var key = prop.indexOf("--") === 0 ? prop : hyphenate_style_name_default(prop);
      converted[key] = style[prop];
    }
    if (style.fallbacks) {
      if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);
      else converted.fallbacks = convertCase(style.fallbacks);
    }
    return converted;
  }
  function camelCase() {
    function onProcessStyle2(style) {
      if (Array.isArray(style)) {
        for (var index4 = 0; index4 < style.length; index4++) {
          style[index4] = convertCase(style[index4]);
        }
        return style;
      }
      return convertCase(style);
    }
    function onChangeValue2(value, prop, rule) {
      if (prop.indexOf("--") === 0) {
        return value;
      }
      var hyphenatedProp = hyphenate_style_name_default(prop);
      if (prop === hyphenatedProp) return value;
      rule.prop(hyphenatedProp, value);
      return null;
    }
    return {
      onProcessStyle: onProcessStyle2,
      onChangeValue: onChangeValue2
    };
  }
  var jss_plugin_camel_case_esm_default = camelCase;

  // node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js
  var px = hasCSSTOMSupport && CSS ? CSS.px : "px";
  var ms = hasCSSTOMSupport && CSS ? CSS.ms : "ms";
  var percent = hasCSSTOMSupport && CSS ? CSS.percent : "%";
  var defaultUnits = {
    // Animation properties
    "animation-delay": ms,
    "animation-duration": ms,
    // Background properties
    "background-position": px,
    "background-position-x": px,
    "background-position-y": px,
    "background-size": px,
    // Border Properties
    border: px,
    "border-bottom": px,
    "border-bottom-left-radius": px,
    "border-bottom-right-radius": px,
    "border-bottom-width": px,
    "border-left": px,
    "border-left-width": px,
    "border-radius": px,
    "border-right": px,
    "border-right-width": px,
    "border-top": px,
    "border-top-left-radius": px,
    "border-top-right-radius": px,
    "border-top-width": px,
    "border-width": px,
    "border-block": px,
    "border-block-end": px,
    "border-block-end-width": px,
    "border-block-start": px,
    "border-block-start-width": px,
    "border-block-width": px,
    "border-inline": px,
    "border-inline-end": px,
    "border-inline-end-width": px,
    "border-inline-start": px,
    "border-inline-start-width": px,
    "border-inline-width": px,
    "border-start-start-radius": px,
    "border-start-end-radius": px,
    "border-end-start-radius": px,
    "border-end-end-radius": px,
    // Margin properties
    margin: px,
    "margin-bottom": px,
    "margin-left": px,
    "margin-right": px,
    "margin-top": px,
    "margin-block": px,
    "margin-block-end": px,
    "margin-block-start": px,
    "margin-inline": px,
    "margin-inline-end": px,
    "margin-inline-start": px,
    // Padding properties
    padding: px,
    "padding-bottom": px,
    "padding-left": px,
    "padding-right": px,
    "padding-top": px,
    "padding-block": px,
    "padding-block-end": px,
    "padding-block-start": px,
    "padding-inline": px,
    "padding-inline-end": px,
    "padding-inline-start": px,
    // Mask properties
    "mask-position-x": px,
    "mask-position-y": px,
    "mask-size": px,
    // Width and height properties
    height: px,
    width: px,
    "min-height": px,
    "max-height": px,
    "min-width": px,
    "max-width": px,
    // Position properties
    bottom: px,
    left: px,
    top: px,
    right: px,
    inset: px,
    "inset-block": px,
    "inset-block-end": px,
    "inset-block-start": px,
    "inset-inline": px,
    "inset-inline-end": px,
    "inset-inline-start": px,
    // Shadow properties
    "box-shadow": px,
    "text-shadow": px,
    // Column properties
    "column-gap": px,
    "column-rule": px,
    "column-rule-width": px,
    "column-width": px,
    // Font and text properties
    "font-size": px,
    "font-size-delta": px,
    "letter-spacing": px,
    "text-decoration-thickness": px,
    "text-indent": px,
    "text-stroke": px,
    "text-stroke-width": px,
    "word-spacing": px,
    // Motion properties
    motion: px,
    "motion-offset": px,
    // Outline properties
    outline: px,
    "outline-offset": px,
    "outline-width": px,
    // Perspective properties
    perspective: px,
    "perspective-origin-x": percent,
    "perspective-origin-y": percent,
    // Transform properties
    "transform-origin": percent,
    "transform-origin-x": percent,
    "transform-origin-y": percent,
    "transform-origin-z": percent,
    // Transition properties
    "transition-delay": ms,
    "transition-duration": ms,
    // Alignment properties
    "vertical-align": px,
    "flex-basis": px,
    // Some random properties
    "shape-margin": px,
    size: px,
    gap: px,
    // Grid properties
    grid: px,
    "grid-gap": px,
    "row-gap": px,
    "grid-row-gap": px,
    "grid-column-gap": px,
    "grid-template-rows": px,
    "grid-template-columns": px,
    "grid-auto-rows": px,
    "grid-auto-columns": px,
    // Not existing properties.
    // Used to avoid issues with jss-plugin-expand integration.
    "box-shadow-x": px,
    "box-shadow-y": px,
    "box-shadow-blur": px,
    "box-shadow-spread": px,
    "font-line-height": px,
    "text-shadow-x": px,
    "text-shadow-y": px,
    "text-shadow-blur": px
  };
  function addCamelCasedVersion(obj) {
    var regExp2 = /(-[a-z])/g;
    var replace = function replace2(str) {
      return str[1].toUpperCase();
    };
    var newObj = {};
    for (var key in obj) {
      newObj[key] = obj[key];
      newObj[key.replace(regExp2, replace)] = obj[key];
    }
    return newObj;
  }
  var units = addCamelCasedVersion(defaultUnits);
  function iterate(prop, value, options) {
    if (value == null) return value;
    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }
    } else if (typeof value === "object") {
      if (prop === "fallbacks") {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }
      } else {
        for (var _innerProp in value) {
          value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
        }
      }
    } else if (typeof value === "number" && isNaN(value) === false) {
      var unit = options[prop] || units[prop];
      if (unit && !(value === 0 && unit === px)) {
        return typeof unit === "function" ? unit(value).toString() : "" + value + unit;
      }
      return value.toString();
    }
    return value;
  }
  function defaultUnit(options) {
    if (options === void 0) {
      options = {};
    }
    var camelCasedOptions = addCamelCasedVersion(options);
    function onProcessStyle2(style, rule) {
      if (rule.type !== "style") return style;
      for (var prop in style) {
        style[prop] = iterate(prop, style[prop], camelCasedOptions);
      }
      return style;
    }
    function onChangeValue2(value, prop) {
      return iterate(prop, value, camelCasedOptions);
    }
    return {
      onProcessStyle: onProcessStyle2,
      onChangeValue: onChangeValue2
    };
  }
  var jss_plugin_default_unit_esm_default = defaultUnit;

  // node_modules/jss-plugin-expand/dist/jss-plugin-expand.esm.js
  var propArray = {
    "background-size": true,
    "background-position": true,
    border: true,
    "border-bottom": true,
    "border-left": true,
    "border-top": true,
    "border-right": true,
    "border-radius": true,
    "border-image": true,
    "border-width": true,
    "border-style": true,
    "border-color": true,
    "box-shadow": true,
    flex: true,
    margin: true,
    padding: true,
    outline: true,
    "transform-origin": true,
    transform: true,
    transition: true
    /**
     * A scheme for converting arrays to regular styles inside of objects.
     * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
     */
  };
  var propArrayInObj = {
    position: true,
    // background-position
    size: true
    // background-size
    /**
     * A scheme for parsing and building correct styles from passed objects.
     */
  };
  var propObj = {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    background: {
      attachment: null,
      color: null,
      image: null,
      position: null,
      repeat: null
    },
    border: {
      width: null,
      style: null,
      color: null
    },
    "border-top": {
      width: null,
      style: null,
      color: null
    },
    "border-right": {
      width: null,
      style: null,
      color: null
    },
    "border-bottom": {
      width: null,
      style: null,
      color: null
    },
    "border-left": {
      width: null,
      style: null,
      color: null
    },
    outline: {
      width: null,
      style: null,
      color: null
    },
    "list-style": {
      type: null,
      position: null,
      image: null
    },
    transition: {
      property: null,
      duration: null,
      "timing-function": null,
      timingFunction: null,
      // Needed for avoiding comilation issues with jss-plugin-camel-case
      delay: null
    },
    animation: {
      name: null,
      duration: null,
      "timing-function": null,
      timingFunction: null,
      // Needed to avoid compilation issues with jss-plugin-camel-case
      delay: null,
      "iteration-count": null,
      iterationCount: null,
      // Needed to avoid compilation issues with jss-plugin-camel-case
      direction: null,
      "fill-mode": null,
      fillMode: null,
      // Needed to avoid compilation issues with jss-plugin-camel-case
      "play-state": null,
      playState: null
      // Needed to avoid compilation issues with jss-plugin-camel-case
    },
    "box-shadow": {
      x: 0,
      y: 0,
      blur: 0,
      spread: 0,
      color: null,
      inset: null
    },
    "text-shadow": {
      x: 0,
      y: 0,
      blur: null,
      color: null
    }
    /**
     * A scheme for converting non-standart properties inside object.
     * For e.g.: include 'border-radius' property inside 'border' object.
     */
  };
  var customPropObj = {
    border: {
      radius: "border-radius",
      image: "border-image",
      width: "border-width",
      style: "border-style",
      color: "border-color"
    },
    "border-bottom": {
      width: "border-bottom-width",
      style: "border-bottom-style",
      color: "border-bottom-color"
    },
    "border-top": {
      width: "border-top-width",
      style: "border-top-style",
      color: "border-top-color"
    },
    "border-left": {
      width: "border-left-width",
      style: "border-left-style",
      color: "border-left-color"
    },
    "border-right": {
      width: "border-right-width",
      style: "border-right-style",
      color: "border-right-color"
    },
    background: {
      size: "background-size",
      image: "background-image"
    },
    font: {
      style: "font-style",
      variant: "font-variant",
      weight: "font-weight",
      stretch: "font-stretch",
      size: "font-size",
      family: "font-family",
      lineHeight: "line-height",
      // Needed to avoid compilation issues with jss-plugin-camel-case
      "line-height": "line-height"
    },
    flex: {
      grow: "flex-grow",
      basis: "flex-basis",
      direction: "flex-direction",
      wrap: "flex-wrap",
      flow: "flex-flow",
      shrink: "flex-shrink"
    },
    align: {
      self: "align-self",
      items: "align-items",
      content: "align-content"
    },
    grid: {
      "template-columns": "grid-template-columns",
      templateColumns: "grid-template-columns",
      "template-rows": "grid-template-rows",
      templateRows: "grid-template-rows",
      "template-areas": "grid-template-areas",
      templateAreas: "grid-template-areas",
      template: "grid-template",
      "auto-columns": "grid-auto-columns",
      autoColumns: "grid-auto-columns",
      "auto-rows": "grid-auto-rows",
      autoRows: "grid-auto-rows",
      "auto-flow": "grid-auto-flow",
      autoFlow: "grid-auto-flow",
      row: "grid-row",
      column: "grid-column",
      "row-start": "grid-row-start",
      rowStart: "grid-row-start",
      "row-end": "grid-row-end",
      rowEnd: "grid-row-end",
      "column-start": "grid-column-start",
      columnStart: "grid-column-start",
      "column-end": "grid-column-end",
      columnEnd: "grid-column-end",
      area: "grid-area",
      gap: "grid-gap",
      "row-gap": "grid-row-gap",
      rowGap: "grid-row-gap",
      "column-gap": "grid-column-gap",
      columnGap: "grid-column-gap"
    }
  };
  function mapValuesByProp(value, prop, rule) {
    return value.map(function(item) {
      return objectToArray(item, prop, rule, false, true);
    });
  }
  function processArray(value, prop, scheme, rule) {
    if (scheme[prop] == null) return value;
    if (value.length === 0) return [];
    if (Array.isArray(value[0])) return processArray(value[0], prop, scheme, rule);
    if (typeof value[0] === "object") {
      return mapValuesByProp(value, prop, rule);
    }
    return [value];
  }
  function objectToArray(value, prop, rule, isFallback, isInArray) {
    if (!(propObj[prop] || customPropObj[prop])) return [];
    var result2 = [];
    if (customPropObj[prop]) {
      value = customPropsToStyle(value, rule, customPropObj[prop], isFallback);
    }
    if (Object.keys(value).length) {
      for (var baseProp in propObj[prop]) {
        if (value[baseProp]) {
          if (Array.isArray(value[baseProp])) {
            result2.push(propArrayInObj[baseProp] === null ? value[baseProp] : value[baseProp].join(" "));
          } else result2.push(value[baseProp]);
          continue;
        }
        if (propObj[prop][baseProp] != null) {
          result2.push(propObj[prop][baseProp]);
        }
      }
    }
    if (!result2.length || isInArray) return result2;
    return [result2];
  }
  function customPropsToStyle(value, rule, customProps, isFallback) {
    for (var prop in customProps) {
      var propName = customProps[prop];
      if (typeof value[prop] !== "undefined" && (isFallback || !rule.prop(propName))) {
        var _styleDetector;
        var appendedValue = styleDetector((_styleDetector = {}, _styleDetector[propName] = value[prop], _styleDetector), rule)[propName];
        if (isFallback) rule.style.fallbacks[propName] = appendedValue;
        else rule.style[propName] = appendedValue;
      }
      delete value[prop];
    }
    return value;
  }
  function styleDetector(style, rule, isFallback) {
    for (var prop in style) {
      var value = style[prop];
      if (Array.isArray(value)) {
        if (!Array.isArray(value[0])) {
          if (prop === "fallbacks") {
            for (var index4 = 0; index4 < style.fallbacks.length; index4++) {
              style.fallbacks[index4] = styleDetector(style.fallbacks[index4], rule, true);
            }
            continue;
          }
          style[prop] = processArray(value, prop, propArray, rule);
          if (!style[prop].length) delete style[prop];
        }
      } else if (typeof value === "object") {
        if (prop === "fallbacks") {
          style.fallbacks = styleDetector(style.fallbacks, rule, true);
          continue;
        }
        style[prop] = objectToArray(value, prop, rule, isFallback);
        if (!style[prop].length) delete style[prop];
      } else if (style[prop] === "") delete style[prop];
    }
    return style;
  }
  function jssExpand() {
    function onProcessStyle2(style, rule) {
      if (!style || rule.type !== "style") return style;
      if (Array.isArray(style)) {
        for (var index4 = 0; index4 < style.length; index4++) {
          style[index4] = styleDetector(style[index4], rule);
        }
        return style;
      }
      return styleDetector(style, rule);
    }
    return {
      onProcessStyle: onProcessStyle2
    };
  }
  var jss_plugin_expand_esm_default = jssExpand;

  // node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }

  // node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }

  // node_modules/@babel/runtime/helpers/esm/iterableToArray.js
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }

  // node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  // node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }

  // node_modules/css-vendor/dist/css-vendor.esm.js
  var js = "";
  var css = "";
  var vendor = "";
  var browser = "";
  var isTouch = module_default && "ontouchstart" in document.documentElement;
  if (module_default) {
    jsCssMap = {
      Moz: "-moz-",
      ms: "-ms-",
      O: "-o-",
      Webkit: "-webkit-"
    };
    _document$createEleme = document.createElement("p"), style = _document$createEleme.style;
    testProp = "Transform";
    for (key in jsCssMap) {
      if (key + testProp in style) {
        js = key;
        css = jsCssMap[key];
        break;
      }
    }
    if (js === "Webkit" && "msHyphens" in style) {
      js = "ms";
      css = jsCssMap.ms;
      browser = "edge";
    }
    if (js === "Webkit" && "-apple-trailing-word" in style) {
      vendor = "apple";
    }
  }
  var jsCssMap;
  var _document$createEleme;
  var style;
  var testProp;
  var key;
  var prefix = {
    js,
    css,
    vendor,
    browser,
    isTouch
  };
  function supportedKeyframes(key) {
    if (key[1] === "-") return key;
    if (prefix.js === "ms") return key;
    return "@" + prefix.css + "keyframes" + key.substr(10);
  }
  var appearence = {
    noPrefill: ["appearance"],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== "appearance") return false;
      if (prefix.js === "ms") return "-webkit-" + prop;
      return prefix.css + prop;
    }
  };
  var colorAdjust = {
    noPrefill: ["color-adjust"],
    supportedProperty: function supportedProperty2(prop) {
      if (prop !== "color-adjust") return false;
      if (prefix.js === "Webkit") return prefix.css + "print-" + prop;
      return prop;
    }
  };
  var regExp = /[-\s]+(.)?/g;
  function toUpper(match, c) {
    return c ? c.toUpperCase() : "";
  }
  function camelize(str) {
    return str.replace(regExp, toUpper);
  }
  function pascalize(str) {
    return camelize("-" + str);
  }
  var mask = {
    noPrefill: ["mask"],
    supportedProperty: function supportedProperty3(prop, style) {
      if (!/^mask/.test(prop)) return false;
      if (prefix.js === "Webkit") {
        var longhand = "mask-image";
        if (camelize(longhand) in style) {
          return prop;
        }
        if (prefix.js + pascalize(longhand) in style) {
          return prefix.css + prop;
        }
      }
      return prop;
    }
  };
  var textOrientation = {
    noPrefill: ["text-orientation"],
    supportedProperty: function supportedProperty4(prop) {
      if (prop !== "text-orientation") return false;
      if (prefix.vendor === "apple" && !prefix.isTouch) {
        return prefix.css + prop;
      }
      return prop;
    }
  };
  var transform = {
    noPrefill: ["transform"],
    supportedProperty: function supportedProperty5(prop, style, options) {
      if (prop !== "transform") return false;
      if (options.transform) {
        return prop;
      }
      return prefix.css + prop;
    }
  };
  var transition = {
    noPrefill: ["transition"],
    supportedProperty: function supportedProperty6(prop, style, options) {
      if (prop !== "transition") return false;
      if (options.transition) {
        return prop;
      }
      return prefix.css + prop;
    }
  };
  var writingMode = {
    noPrefill: ["writing-mode"],
    supportedProperty: function supportedProperty7(prop) {
      if (prop !== "writing-mode") return false;
      if (prefix.js === "Webkit" || prefix.js === "ms" && prefix.browser !== "edge") {
        return prefix.css + prop;
      }
      return prop;
    }
  };
  var userSelect = {
    noPrefill: ["user-select"],
    supportedProperty: function supportedProperty8(prop) {
      if (prop !== "user-select") return false;
      if (prefix.js === "Moz" || prefix.js === "ms" || prefix.vendor === "apple") {
        return prefix.css + prop;
      }
      return prop;
    }
  };
  var breakPropsOld = {
    supportedProperty: function supportedProperty9(prop, style) {
      if (!/^break-/.test(prop)) return false;
      if (prefix.js === "Webkit") {
        var jsProp = "WebkitColumn" + pascalize(prop);
        return jsProp in style ? prefix.css + "column-" + prop : false;
      }
      if (prefix.js === "Moz") {
        var _jsProp = "page" + pascalize(prop);
        return _jsProp in style ? "page-" + prop : false;
      }
      return false;
    }
  };
  var inlineLogicalOld = {
    supportedProperty: function supportedProperty10(prop, style) {
      if (!/^(border|margin|padding)-inline/.test(prop)) return false;
      if (prefix.js === "Moz") return prop;
      var newProp = prop.replace("-inline", "");
      return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
    }
  };
  var unprefixed = {
    supportedProperty: function supportedProperty11(prop, style) {
      return camelize(prop) in style ? prop : false;
    }
  };
  var prefixed = {
    supportedProperty: function supportedProperty12(prop, style) {
      var pascalized = pascalize(prop);
      if (prop[0] === "-") return prop;
      if (prop[0] === "-" && prop[1] === "-") return prop;
      if (prefix.js + pascalized in style) return prefix.css + prop;
      if (prefix.js !== "Webkit" && "Webkit" + pascalized in style) return "-webkit-" + prop;
      return false;
    }
  };
  var scrollSnap = {
    supportedProperty: function supportedProperty13(prop) {
      if (prop.substring(0, 11) !== "scroll-snap") return false;
      if (prefix.js === "ms") {
        return "" + prefix.css + prop;
      }
      return prop;
    }
  };
  var overscrollBehavior = {
    supportedProperty: function supportedProperty14(prop) {
      if (prop !== "overscroll-behavior") return false;
      if (prefix.js === "ms") {
        return prefix.css + "scroll-chaining";
      }
      return prop;
    }
  };
  var propMap = {
    "flex-grow": "flex-positive",
    "flex-shrink": "flex-negative",
    "flex-basis": "flex-preferred-size",
    "justify-content": "flex-pack",
    order: "flex-order",
    "align-items": "flex-align",
    "align-content": "flex-line-pack"
    // 'align-self' is handled by 'align-self' plugin.
  };
  var flex2012 = {
    supportedProperty: function supportedProperty15(prop, style) {
      var newProp = propMap[prop];
      if (!newProp) return false;
      return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
    }
  };
  var propMap$1 = {
    flex: "box-flex",
    "flex-grow": "box-flex",
    "flex-direction": ["box-orient", "box-direction"],
    order: "box-ordinal-group",
    "align-items": "box-align",
    "flex-flow": ["box-orient", "box-direction"],
    "justify-content": "box-pack"
  };
  var propKeys = Object.keys(propMap$1);
  var prefixCss = function prefixCss2(p) {
    return prefix.css + p;
  };
  var flex2009 = {
    supportedProperty: function supportedProperty16(prop, style, _ref) {
      var multiple = _ref.multiple;
      if (propKeys.indexOf(prop) > -1) {
        var newProp = propMap$1[prop];
        if (!Array.isArray(newProp)) {
          return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
        }
        if (!multiple) return false;
        for (var i = 0; i < newProp.length; i++) {
          if (!(prefix.js + pascalize(newProp[0]) in style)) {
            return false;
          }
        }
        return newProp.map(prefixCss);
      }
      return false;
    }
  };
  var plugins2 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
  var propertyDetectors = plugins2.filter(function(p) {
    return p.supportedProperty;
  }).map(function(p) {
    return p.supportedProperty;
  });
  var noPrefill = plugins2.filter(function(p) {
    return p.noPrefill;
  }).reduce(function(a, p) {
    a.push.apply(a, _toConsumableArray(p.noPrefill));
    return a;
  }, []);
  var el;
  var cache2 = {};
  if (module_default) {
    el = document.createElement("p");
    computed = window.getComputedStyle(document.documentElement, "");
    for (key$1 in computed) {
      if (!isNaN(key$1)) cache2[computed[key$1]] = computed[key$1];
    }
    noPrefill.forEach(function(x) {
      return delete cache2[x];
    });
  }
  var computed;
  var key$1;
  function supportedProperty17(prop, options) {
    if (options === void 0) {
      options = {};
    }
    if (!el) return prop;
    if (cache2[prop] != null) {
      return cache2[prop];
    }
    if (prop === "transition" || prop === "transform") {
      options[prop] = prop in el.style;
    }
    for (var i = 0; i < propertyDetectors.length; i++) {
      cache2[prop] = propertyDetectors[i](prop, el.style, options);
      if (cache2[prop]) break;
    }
    try {
      el.style[prop] = "";
    } catch (err) {
      return false;
    }
    return cache2[prop];
  }
  var cache$1 = {};
  var transitionProperties = {
    transition: 1,
    "transition-property": 1,
    "-webkit-transition": 1,
    "-webkit-transition-property": 1
  };
  var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
  var el$1;
  function prefixTransitionCallback(match, p1, p2) {
    if (p1 === "var") return "var";
    if (p1 === "all") return "all";
    if (p2 === "all") return ", all";
    var prefixedValue = p1 ? supportedProperty17(p1) : ", " + supportedProperty17(p2);
    if (!prefixedValue) return p1 || p2;
    return prefixedValue;
  }
  if (module_default) el$1 = document.createElement("p");
  function supportedValue(property, value) {
    var prefixedValue = value;
    if (!el$1 || property === "content") return value;
    if (typeof prefixedValue !== "string" || !isNaN(parseInt(prefixedValue, 10))) {
      return prefixedValue;
    }
    var cacheKey = property + prefixedValue;
    if (cache$1[cacheKey] != null) {
      return cache$1[cacheKey];
    }
    try {
      el$1.style[property] = prefixedValue;
    } catch (err) {
      cache$1[cacheKey] = false;
      return false;
    }
    if (transitionProperties[property]) {
      prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
    } else if (el$1.style[property] === "") {
      prefixedValue = prefix.css + prefixedValue;
      if (prefixedValue === "-ms-flex") el$1.style[property] = "-ms-flexbox";
      el$1.style[property] = prefixedValue;
      if (el$1.style[property] === "") {
        cache$1[cacheKey] = false;
        return false;
      }
    }
    el$1.style[property] = "";
    cache$1[cacheKey] = prefixedValue;
    return cache$1[cacheKey];
  }

  // node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js
  function jssVendorPrefixer() {
    function onProcessRule3(rule) {
      if (rule.type === "keyframes") {
        var atRule = rule;
        atRule.at = supportedKeyframes(atRule.at);
      }
    }
    function prefixStyle(style) {
      for (var prop in style) {
        var value = style[prop];
        if (prop === "fallbacks" && Array.isArray(value)) {
          style[prop] = value.map(prefixStyle);
          continue;
        }
        var changeProp = false;
        var supportedProp = supportedProperty17(prop);
        if (supportedProp && supportedProp !== prop) changeProp = true;
        var changeValue = false;
        var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
        if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;
        if (changeProp || changeValue) {
          if (changeProp) delete style[prop];
          style[supportedProp || prop] = supportedValue$1 || value;
        }
      }
      return style;
    }
    function onProcessStyle2(style, rule) {
      if (rule.type !== "style") return style;
      return prefixStyle(style);
    }
    function onChangeValue2(value, prop) {
      return supportedValue(prop, toCssValue(value)) || value;
    }
    return {
      onProcessRule: onProcessRule3,
      onProcessStyle: onProcessStyle2,
      onChangeValue: onChangeValue2
    };
  }
  var jss_plugin_vendor_prefixer_esm_default = jssVendorPrefixer;

  // node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js
  function jssPropsSort() {
    var sort = function sort2(prop0, prop1) {
      if (prop0.length === prop1.length) {
        return prop0 > prop1 ? 1 : -1;
      }
      return prop0.length - prop1.length;
    };
    return {
      onProcessStyle: function onProcessStyle2(style, rule) {
        if (rule.type !== "style") return style;
        var newStyle = {};
        var props = Object.keys(style).sort(sort);
        for (var i = 0; i < props.length; i++) {
          newStyle[props[i]] = style[props[i]];
        }
        return newStyle;
      }
    };
  }
  var jss_plugin_props_sort_esm_default = jssPropsSort;

  // node_modules/jss-preset-default/dist/jss-preset-default.esm.js
  var create = function create2(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      plugins: [jss_plugin_rule_value_function_esm_default(), jss_plugin_rule_value_observable_esm_default(options.observable), jss_plugin_template_esm_default(), jss_plugin_global_esm_default(), jss_plugin_extend_esm_default(), jss_plugin_nested_esm_default(), jss_plugin_compose_esm_default(), jss_plugin_camel_case_esm_default(), jss_plugin_default_unit_esm_default(options.defaultUnit), jss_plugin_expand_esm_default(), jss_plugin_vendor_prefixer_esm_default(), jss_plugin_props_sort_esm_default()]
    };
  };
  var jss_preset_default_esm_default = create;

  // node_modules/@emotion/memoize/dist/memoize.browser.esm.js
  function memoize3(fn) {
    var cache3 = {};
    return function(arg) {
      if (cache3[arg] === void 0) cache3[arg] = fn(arg);
      return cache3[arg];
    };
  }
  var memoize_browser_esm_default = memoize3;

  // node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  var index2 = memoize_browser_esm_default(
    function(prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    }
    /* Z+1 */
  );

  // node_modules/css-jss/dist/css-jss.esm.js
  var MAX_RULES_PER_SHEET = 1e4;
  var defaultJss = createJss(jss_preset_default_esm_default());
  var createCss = function createCss2(jss) {
    if (jss === void 0) {
      jss = defaultJss;
    }
    var cache3 = /* @__PURE__ */ new Map();
    var ruleIndex = 0;
    var sheet;
    var getSheet = function getSheet2() {
      if (!sheet || sheet.rules.index.length > MAX_RULES_PER_SHEET) {
        sheet = jss.createStyleSheet().attach();
      }
      return sheet;
    };
    function css3() {
      var args = arguments;
      var argsStr = JSON.stringify(args);
      var cached = cache3.get(argsStr);
      if (cached) return cached.className;
      var flatArgs = [];
      for (var argIndex in args) {
        var arg = args[argIndex];
        if (!Array.isArray(arg)) {
          flatArgs.push(arg);
          continue;
        }
        for (var innerArgIndex = 0; innerArgIndex < arg.length; innerArgIndex++) {
          flatArgs.push(arg[innerArgIndex]);
        }
      }
      var mergedStyle = {};
      var labels = [];
      for (var i = 0; i < flatArgs.length; i++) {
        var style = flatArgs[i];
        if (!style) continue;
        var styleObject = style;
        if (typeof style === "string") {
          var _cached = cache3.get(style);
          if (_cached) {
            if (_cached.labels.length) labels.push.apply(labels, _cached.labels);
            styleObject = _cached.style;
          }
        }
        if (styleObject.label && labels.indexOf(styleObject.label) === -1) labels.push(styleObject.label);
        Object.assign(mergedStyle, styleObject);
      }
      delete mergedStyle.label;
      var label = labels.length === 0 ? "css" : labels.join("-");
      var key = label + "-" + ruleIndex++;
      getSheet().addRule(key, mergedStyle);
      var className = getSheet().classes[key];
      var cacheValue = {
        style: mergedStyle,
        labels,
        className
      };
      cache3.set(argsStr, cacheValue);
      cache3.set(className, cacheValue);
      return className;
    }
    css3.getSheet = getSheet;
    return css3;
  };
  var css2 = createCss();
  var css_jss_esm_default = css2;

  // node_modules/react-jss/dist/react-jss.esm.js
  var index3 = Number.MIN_SAFE_INTEGER || -1e9;
  var getSheetIndex = function getSheetIndex2() {
    return index3++;
  };
  var JssContext = (0, import_react4.createContext)({
    classNamePrefix: "",
    disableStylesGeneration: false,
    isSSR: !module_default
  });
  var defaultManagers = /* @__PURE__ */ new Map();
  var getManager = function getManager2(context, managerId) {
    var managers = context.managers;
    if (managers) {
      if (!managers[managerId]) {
        managers[managerId] = new SheetsManager();
      }
      return managers[managerId];
    }
    var manager = defaultManagers.get(managerId);
    if (!manager) {
      manager = new SheetsManager();
      defaultManagers.set(managerId, manager);
    }
    return manager;
  };
  var manageSheet = function manageSheet2(options) {
    var sheet = options.sheet, context = options.context, index4 = options.index, theme = options.theme;
    if (!sheet) {
      return;
    }
    var manager = getManager(context, index4);
    manager.manage(theme);
    if (context.registry) {
      context.registry.add(sheet);
    }
  };
  var unmanageSheet = function unmanageSheet2(options) {
    if (!options.sheet) {
      return;
    }
    var manager = getManager(options.context, options.index);
    manager.unmanage(options.theme);
  };
  var defaultJss2 = createJss(jss_preset_default_esm_default());
  var sheetsMeta = /* @__PURE__ */ new WeakMap();
  var getMeta = function getMeta2(sheet) {
    return sheetsMeta.get(sheet);
  };
  var addMeta = function addMeta2(sheet, meta) {
    sheetsMeta.set(sheet, meta);
  };
  var getStyles = function getStyles2(options) {
    var styles = options.styles;
    if (typeof styles !== "function") {
      return styles;
    }
    true ? tiny_warning_esm_default(styles.length !== 0, "[JSS] <" + (options.name || "Hook") + ` />'s styles function doesn't rely on the "theme" argument. We recommend declaring styles as an object instead.`) : void 0;
    return styles(options.theme);
  };
  function getSheetOptions(options, link) {
    var minify;
    if (options.context.id && options.context.id.minify != null) {
      minify = options.context.id.minify;
    }
    var classNamePrefix = options.context.classNamePrefix || "";
    if (options.name && !minify) {
      classNamePrefix += options.name.replace(/\s/g, "-") + "-";
    }
    var meta = "";
    if (options.name) meta = options.name + ", ";
    meta += typeof options.styles === "function" ? "Themed" : "Unthemed";
    return _extends2({}, options.sheetOptions, {
      index: options.index,
      meta,
      classNamePrefix,
      link,
      generateId: options.sheetOptions && options.sheetOptions.generateId ? options.sheetOptions.generateId : options.context.generateId
    });
  }
  var createStyleSheet = function createStyleSheet2(options) {
    if (options.context.disableStylesGeneration) {
      return void 0;
    }
    var manager = getManager(options.context, options.index);
    var existingSheet = manager.get(options.theme);
    if (existingSheet) {
      return existingSheet;
    }
    var jss = options.context.jss || defaultJss2;
    var styles = getStyles(options);
    var dynamicStyles = getDynamicStyles(styles);
    var sheet = jss.createStyleSheet(styles, getSheetOptions(options, dynamicStyles !== null));
    addMeta(sheet, {
      dynamicStyles,
      styles
    });
    manager.add(options.theme, sheet);
    return sheet;
  };
  var removeDynamicRules = function removeDynamicRules2(sheet, rules) {
    for (var key in rules) {
      sheet.deleteRule(rules[key]);
    }
  };
  var updateDynamicRules = function updateDynamicRules2(data, sheet, rules) {
    for (var key in rules) {
      sheet.updateOne(rules[key], data);
    }
  };
  var addDynamicRules = function addDynamicRules2(sheet, data) {
    var meta = getMeta(sheet);
    if (!meta) {
      return void 0;
    }
    var rules = {};
    for (var key in meta.dynamicStyles) {
      var initialRuleCount = sheet.rules.index.length;
      var originalRule = sheet.addRule(key, meta.dynamicStyles[key]);
      for (var i = initialRuleCount; i < sheet.rules.index.length; i++) {
        var rule = sheet.rules.index[i];
        sheet.updateOne(rule, data);
        rules[originalRule === rule ? key : rule.key] = rule;
      }
    }
    return rules;
  };
  var getSheetClasses = function getSheetClasses2(sheet, dynamicRules) {
    if (!dynamicRules) {
      return sheet.classes;
    }
    var meta = getMeta(sheet);
    if (!meta) {
      return sheet.classes;
    }
    var classes = {};
    for (var key in meta.styles) {
      classes[key] = sheet.classes[key];
      if (key in dynamicRules) {
        classes[key] += " " + sheet.classes[dynamicRules[key].key];
      }
    }
    return classes;
  };
  function getUseInsertionEffect(isSSR) {
    return isSSR ? import_react4.useEffect : import_react4.default.useInsertionEffect || // React 18+ (https://github.com/reactwg/react-18/discussions/110)
    import_react4.useLayoutEffect;
  }
  var noTheme = {};
  var createUseStyles = function createUseStyles2(styles, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$index = _options.index, index4 = _options$index === void 0 ? getSheetIndex() : _options$index, theming = _options.theming, name = _options.name, sheetOptions = _objectWithoutPropertiesLoose2(_options, ["index", "theming", "name"]);
    var ThemeContext$1 = theming && theming.context || ThemeContext;
    var useTheme2 = function useTheme3(theme) {
      if (typeof styles === "function") {
        return theme || (0, import_react4.useContext)(ThemeContext$1) || noTheme;
      }
      return noTheme;
    };
    var emptyObject = {};
    return function useStyles(data) {
      var isFirstMount = (0, import_react4.useRef)(true);
      var context = (0, import_react4.useContext)(JssContext);
      var theme = useTheme2(data && data.theme);
      var _useMemo = (0, import_react4.useMemo)(function() {
        var newSheet = createStyleSheet({
          context,
          styles,
          name,
          theme,
          index: index4,
          sheetOptions
        });
        if (newSheet && context.isSSR) {
          manageSheet({
            index: index4,
            context,
            sheet: newSheet,
            theme
          });
        }
        return [newSheet, newSheet ? addDynamicRules(newSheet, data) : null];
      }, [context, theme]), sheet = _useMemo[0], dynamicRules = _useMemo[1];
      getUseInsertionEffect(context.isSSR)(function() {
        if (sheet && dynamicRules && !isFirstMount.current) {
          updateDynamicRules(data, sheet, dynamicRules);
        }
      }, [data]);
      getUseInsertionEffect(context.isSSR)(function() {
        if (sheet) {
          manageSheet({
            index: index4,
            context,
            sheet,
            theme
          });
        }
        return function() {
          if (sheet) {
            unmanageSheet({
              index: index4,
              context,
              sheet,
              theme
            });
            if (dynamicRules) {
              removeDynamicRules(sheet, dynamicRules);
            }
          }
        };
      }, [sheet]);
      var classes = (0, import_react4.useMemo)(function() {
        return sheet && dynamicRules ? getSheetClasses(sheet, dynamicRules) : emptyObject;
      }, [sheet, dynamicRules]);
      (0, import_react4.useDebugValue)(classes);
      (0, import_react4.useDebugValue)(theme === noTheme ? "No theme" : theme);
      (0, import_react4.useEffect)(function() {
        isFirstMount.current = false;
      });
      return classes;
    };
  };
  var shouldForwardPropSymbol = Symbol("react-jss-styled");
  var create3 = function create4(css3) {
    if (css3 === void 0) {
      css3 = css_jss_esm_default;
    }
    return function createElement$1(type, props) {
      var args = arguments;
      if (props && props.css) {
        var className = css3(props.css);
        var newProps = Object.assign({}, props);
        newProps.className = props.className ? props.className + " " + className : className;
        delete newProps.css;
        args[1] = newProps;
      }
      return import_react4.createElement.apply(void 0, args);
    };
  };
  var jsx = create3();

  // src/App.jsx
  function App() {
    const useStyles = createUseStyles({
      wrapper: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "400px",
        height: "700px",
        overflow: "hidden",
        border: "1px solid #ccc",
        borderRadius: "10px",
        position: "absolute",
        bottom: "10px",
        right: "10px",
        zIndex: "2",
        fontFamily: "Open Sans, sans-serif",
        boxShadow: "0 2px 48px rgba(19, 33, 68, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.04)"
      },
      header: {
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        height: "60px"
      },
      headerLeft: {
        display: "flex",
        alignItems: "center",
        color: "white",
        gap: "10px",
        fontSize: "1.2rem",
        padding: "10px"
      },
      headerLeftImg: {
        width: "50px",
        marginRight: "10px",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "10%"
      },
      headerRight: {
        display: "flex",
        gap: "10px",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center"
      },
      headerRightSvg: {
        width: "25px",
        height: "25px",
        cursor: "pointer"
      },
      input: {
        padding: "13px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        width: "100%",
        position: "relative"
      },
      inputSvg: {
        position: "absolute",
        right: "20px",
        top: "23px",
        width: "25px",
        height: "25px"
      },
      footer: {
        position: "absolute",
        bottom: "0",
        right: "0",
        left: "0",
        display: "flex",
        padding: "15px",
        margin: "0",
        backgroundColor: "white"
      },
      body: {
        overflowY: "scroll",
        scrollbarWidth: "thin",
        height: "100%",
        padding: "20px",
        backgroundColor: "white",
        paddingBottom: "100px"
      },
      bodyTop: {
        fontSize: "0.8rem",
        display: "flex",
        justifyContent: "center",
        color: "#737376"
      },
      bodyChat: {
        display: "flex",
        flexDirection: "column"
      },
      fromAi: {
        display: "flex",
        marginTop: "20px",
        fontSize: "0.8rem"
      },
      fromAiRight: {
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        maxWidth: "60%"
      },
      fromAiRightMessageBalloon: {
        backgroundColor: "#f1f0f0",
        padding: "10px",
        borderRadius: "10px"
      },
      fromMe: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "20px",
        fontSize: "0.8rem"
      },
      fromMeMessageBalloon: {
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        borderRadius: "10px"
      },
      ball: {
        position: "fixed",
        backgroundColor: "black",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1rem",
        fontWeight: "bold",
        bottom: "10px",
        fontFamily: "Open Sans, sans-serif",
        right: "90px",
        cursor: "pointer"
      }
    });
    const classes = useStyles();
    const [isChatVisible, setIsChatVisible] = (0, import_react5.useState)(false);
    const [messages, setMessages] = (0, import_react5.useState)([
      {
        who: "ai",
        message: "Merhaba, ben Elitnet yard\u0131mc\u0131 asistan\u0131y\u0131m!"
      },
      {
        who: "ai",
        message: "Nas\u0131l yard\u0131mc\u0131 olabilirim?"
      },
      {
        who: "me",
        message: "Merhaba"
      },
      {
        who: "ai",
        message: "Merhaba, ben Elitnet yard\u0131mc\u0131 asistan\u0131y\u0131m!"
      },
      {
        who: "ai",
        message: "Nas\u0131l yard\u0131mc\u0131 olabilirim?"
      }
    ]);
    const [message, setMessage] = (0, import_react5.useState)("");
    const handleMessage = (e) => {
      e?.preventDefault();
      if (message === "") return;
      setMessages((prev) => [...prev, { who: "me", message }]);
      setMessage("");
      setTimeout(() => {
        document?.getElementById("messagesBody")?.scrollTo(0, document?.getElementById("messagesBody")?.scrollHeight);
      }, 300);
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      "div",
      {
        onClick: () => setIsChatVisible(!isChatVisible),
        className: classes.ball
      },
      /* @__PURE__ */ React.createElement("span", null, "Chat")
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        style: { display: isChatVisible ? "flex" : "none" },
        className: classes.wrapper
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          onClick: () => setIsChatVisible(!isChatVisible),
          className: classes.header
        },
        /* @__PURE__ */ React.createElement("div", { className: classes.headerLeft }, /* @__PURE__ */ React.createElement(
          "img",
          {
            className: classes.headerLeftImg,
            src: "https://crm.elitnet.net.tr/assets/img/logos/logo/elitLogo.svg",
            alt: ""
          }
        ), /* @__PURE__ */ React.createElement("h5", { style: { fontWeight: "semiBold" } }, "Elitnet Asistan")),
        /* @__PURE__ */ React.createElement("div", { className: classes.headerRight }, /* @__PURE__ */ React.createElement(VscChromeMinimize, { className: classes.headerRightSvg }), /* @__PURE__ */ React.createElement(IoClose, { className: classes.headerRightSvg }))
      ),
      /* @__PURE__ */ React.createElement("div", { id: "messagesBody", className: classes.body }, /* @__PURE__ */ React.createElement("div", { className: classes.bodyTop }, /* @__PURE__ */ React.createElement("span", null, "Bug\xFCn")), /* @__PURE__ */ React.createElement("div", { className: classes.bodyChat }, messages?.map(
        (message2, index4) => message2?.who === "ai" ? /* @__PURE__ */ React.createElement("div", { key: index4, className: classes.fromAi }, /* @__PURE__ */ React.createElement("div", { className: classes.fromAiLeft }, /* @__PURE__ */ React.createElement(
          "img",
          {
            style: { maxWidth: "70%" },
            className: classes.headerLeftImg,
            src: "https://crm.elitnet.net.tr/assets/img/logos/logo/elitLogo.svg",
            alt: ""
          }
        )), /* @__PURE__ */ React.createElement("div", { className: classes.fromAiRight }, /* @__PURE__ */ React.createElement("div", { className: classes.fromAiRightMessageBalloon }, message2.message))) : /* @__PURE__ */ React.createElement("div", { key: index4, className: classes.fromMe }, /* @__PURE__ */ React.createElement("div", { className: classes.fromMeMessageBalloon }, message2?.message))
      ))),
      /* @__PURE__ */ React.createElement("form", { onSubmit: handleMessage, className: classes.footer }, /* @__PURE__ */ React.createElement(
        "input",
        {
          className: classes.input,
          type: "text",
          value: message,
          onChange: (e) => setMessage(e.target.value),
          placeholder: "Mesaj\u0131n\u0131z\u0131 yaz\u0131n..."
        }
      ), /* @__PURE__ */ React.createElement(
        IoArrowUpCircleSharp,
        {
          onClick: handleMessage,
          className: classes.inputSvg
        }
      ))
    ));
  }
  var App_default = App;
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

jss/dist/jss.esm.js:
  (**
   * A better abstraction over CSS.
   *
   * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
   * @website https://github.com/cssinjs/jss
   * @license MIT
   *)
*/
