'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var LeadingActions = function LeadingActions(_ref) {
  var children = _ref.children;

  if (children === null || children === undefined) {
    return null;
  }

  if (Array.isArray(children)) {
    return React__default['default'].Children.map(children, function (child, index) {
      return /*#__PURE__*/React__default['default'].cloneElement(child, {
        leading: true,
        main: index === 0
      });
    });
  }

  return /*#__PURE__*/React__default['default'].cloneElement(children, {
    leading: true,
    main: true
  });
};

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

var Type = {
  ANDROID: Symbol('ANDROID'),
  IOS: Symbol('IOS'),
  MS: Symbol('MS')
};

var SwipeableList = function SwipeableList(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$fullSwipe = _ref.fullSwipe,
      fullSwipe = _ref$fullSwipe === void 0 ? false : _ref$fullSwipe,
      _ref$destructiveCallb = _ref.destructiveCallbackDelay,
      destructiveCallbackDelay = _ref$destructiveCallb === void 0 ? 1000 : _ref$destructiveCallb,
      style = _ref.style,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? Type.ANDROID : _ref$type,
      _ref$Tag = _ref.Tag,
      Tag = _ref$Tag === void 0 ? 'div' : _ref$Tag,
      scrollStartThreshold = _ref.scrollStartThreshold,
      swipeStartThreshold = _ref.swipeStartThreshold,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0.5 : _ref$threshold;
  return /*#__PURE__*/React__default['default'].createElement(Tag, {
    className: clsx('swipeable-list', className),
    style: style
  }, React__default['default'].Children.map(children, function (child) {
    return /*#__PURE__*/React__default['default'].cloneElement(child, {
      destructiveCallbackDelay,
      fullSwipe,
      listType: type,
      scrollStartThreshold,
      swipeStartThreshold,
      threshold
    });
  }));
};

SwipeableList.propTypes = {
  children: PropTypes__default['default'].node,
  className: PropTypes__default['default'].string,
  fullSwipe: PropTypes__default['default'].bool,
  destructiveCallbackDelay: PropTypes__default['default'].number,
  style: PropTypes__default['default'].object,
  type: PropTypes__default['default'].oneOf(Object.values(Type)),
  Tag: PropTypes__default['default'].string,
  scrollStartThreshold: PropTypes__default['default'].number,
  swipeStartThreshold: PropTypes__default['default'].number,
  threshold: PropTypes__default['default'].number
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var ItemContext = /*#__PURE__*/React__default['default'].createContext();
var ActionAnimation = {
  RETURN: Symbol('Return'),
  REMOVE: Symbol('Remove'),
  NONE: Symbol('None')
};
var DragDirection = {
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
  UNKNOWN: 5
};
var FPS_INTERVAL = 1000 / 60;

var measure = function measure(element, fn) {
  var prevWidth = element.style.width;
  var prevVisibility = element.style.visibility;
  element.style.width = 'auto';
  element.style.visibility = 'hidden';
  var result = fn(element);
  element.style.width = prevWidth;
  element.style.visibility = prevVisibility;
  return result;
};

var initialState = {
  leadingFullSwipe: false,
  trailingFullSwipe: false,
  triggerAction: false,
  scaleLeading: false,
  scaleTrailing: false,
  isTranslate: false
};

var SwipeableListItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(SwipeableListItem, _PureComponent);

  var _super = _createSuper(SwipeableListItem);

  function SwipeableListItem(props) {
    var _this;

    _classCallCheck(this, SwipeableListItem);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setLeadingFullSwipeAction", function (action) {
      _this.leadingFullSwipeAction = action;
    });

    _defineProperty(_assertThisInitialized(_this), "setTrailingFullSwipeAction", function (action) {
      _this.trailingFullSwipeAction = action;
    });

    _defineProperty(_assertThisInitialized(_this), "resetState", function () {
      _this.dragStartPoint = {
        x: -1,
        y: -1
      };
      _this.dragDirection = DragDirection.UNKNOWN;
      _this.left = 0;
      _this.previousSwipeDistancePercent = 0;
      _this.leadingActionsOpened = false;
      _this.trailingActionsOpened = false;

      _this.setState({
        isTranslate: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStartMouse", function (event) {
      window.addEventListener('mouseup', _this.handleDragEndMouse);
      window.addEventListener('mousemove', _this.handleMouseMove);

      _this.listElement.addEventListener('mouseup', _this.handleDragEndMouse);

      _this.listElement.addEventListener('mousemove', _this.handleMouseMove);

      _this.handleDragStart(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStartTouch", function (event) {
      window.addEventListener('touchend', _this.handleDragEndTouch);
      var touch = event.targetTouches[0];

      _this.handleDragStart(touch);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (_ref) {
      var clientX = _ref.clientX,
          clientY = _ref.clientY;

      if (!_this.leadingActionsOpened && !_this.trailingActionsOpened) {
        _this.resetState();

        _this.setState(initialState);
      }

      var startOffsetX = 0;

      if (_this.leadingActionsOpened) {
        startOffsetX = -_this.leadingActionsWidth;
      }

      if (_this.trailingActionsOpened) {
        startOffsetX = _this.trailingActionsWidth;
      }

      _this.dragStartPoint = {
        x: clientX + startOffsetX,
        y: clientY
      };
      _this.listElement.className = 'swipeable-list-item__content';

      if (_this.leadingActionsElement) {
        _this.leadingActionsElement.className = 'swipeable-list-item__leading-actions';
      }

      if (_this.trailingActionsElement) {
        _this.trailingActionsElement.className = 'swipeable-list-item__trailing-actions';
      }

      _this.startTime = Date.now();

      _this.scheduleUpdatePosition();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function (event) {
      if (_this.dragStartedWithinItem()) {
        var clientX = event.clientX,
            clientY = event.clientY;

        _this.setDragDirection(clientX, clientY);

        if (_this.isSwiping()) {
          event.stopPropagation();
          event.preventDefault();
          _this.left = clientX - _this.dragStartPoint.x;

          _this.scheduleUpdatePosition();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchMove", function (event) {
      if (_this.dragStartedWithinItem()) {
        var _event$targetTouches$ = event.targetTouches[0],
            clientX = _event$targetTouches$.clientX,
            clientY = _event$targetTouches$.clientY;

        _this.setDragDirection(clientX, clientY);

        if (!event.cancelable) {
          return;
        }

        if (_this.isSwiping()) {
          event.stopPropagation();
          event.preventDefault();
          _this.left = clientX - _this.dragStartPoint.x;

          _this.scheduleUpdatePosition();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragEndMouse", function () {
      window.removeEventListener('mouseup', _this.handleDragEndMouse);
      window.removeEventListener('mousemove', _this.handleMouseMove);

      if (_this.listElement) {
        _this.listElement.removeEventListener('mouseup', _this.handleDragEndMouse);

        _this.listElement.removeEventListener('mousemove', _this.handleMouseMove);
      }

      _this.handleDragEnd();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragEndTouch", function () {
      window.removeEventListener('touchend', _this.handleDragEndTouch);

      _this.handleDragEnd();
    });

    _defineProperty(_assertThisInitialized(_this), "playReturnAnimationForLeadingActions", function (_ref2) {
      var to = _ref2.to,
          isIosType = _ref2.isIosType,
          playMsReturnAnimation = _ref2.playMsReturnAnimation;

      if (_this.leadingActionsElement) {
        _this.leadingActionsElement.className = clsx('swipeable-list-item__leading-actions', playMsReturnAnimation ? 'swipeable-list-item__actions--return-ms' : 'swipeable-list-item__leading-actions--return');

        if (_this.leadingActionsOpened && isIosType) {
          _this.leadingActionsElement.className += ' test-actions-opened';
        }

        if (playMsReturnAnimation) {
          var keepAnimationEnd = function keepAnimationEnd() {
            _this.leadingActionsElement.removeEventListener('animationend', keepAnimationEnd);

            _this.leadingActionsElement.style.width = 0;

            _this.setState({
              isTranslate: false
            });
          };

          _this.leadingActionsElement.addEventListener('animationend', keepAnimationEnd);
        } else {
          _this.leadingActionsElement.style.width = "".concat(to === 0 || !isIosType ? 0 : _this.leadingActionsOpened && isIosType ? _this.leadingActionsWidth : 0, "px");
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "playReturnAnimationForTrailingActions", function (_ref3) {
      var to = _ref3.to,
          isIosType = _ref3.isIosType,
          playMsReturnAnimation = _ref3.playMsReturnAnimation;

      if (_this.trailingActionsElement) {
        _this.trailingActionsElement.className = clsx('swipeable-list-item__trailing-actions', playMsReturnAnimation ? 'swipeable-list-item__actions--return-ms' : 'swipeable-list-item__trailing-actions--return');

        if (_this.trailingActionsOpened && isIosType) {
          _this.trailingActionsElement.className += ' test-actions-opened';
        }

        if (!playMsReturnAnimation) {
          _this.trailingActionsElement.style.width = "".concat(to === 0 || !isIosType ? 0 : _this.trailingActionsOpened && isIosType ? _this.trailingActionsWidth : 0, "px");
        } else {
          var keepAnimationEnd = function keepAnimationEnd() {
            _this.trailingActionsElement.removeEventListener('animationend', keepAnimationEnd);

            _this.trailingActionsElement.style.width = 0;

            _this.setState({
              isTranslate: false
            });
          };

          _this.trailingActionsElement.addEventListener('animationend', keepAnimationEnd);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "playReturnAnimation", function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$to = _ref4.to,
          to = _ref4$to === void 0 ? 0 : _ref4$to;

      var _assertThisInitialize = _assertThisInitialized(_this),
          listElement = _assertThisInitialize.listElement;

      var listType = _this.props.listType;
      var triggerAction = _this.state.triggerAction;
      var isIosType = listType === Type.IOS;
      var isMsType = listType === Type.MS;
      var playMsReturnAnimation = triggerAction && isMsType;

      if (playMsReturnAnimation) {
        var keepAnimationEnd = function keepAnimationEnd() {
          listElement.removeEventListener('animationend', keepAnimationEnd);
          listElement.style.transform = "translateX(0)";

          _this.setState({
            isTranslate: false
          });
        };

        listElement.addEventListener('animationend', keepAnimationEnd);
      }

      if (listElement) {
        listElement.className = clsx('swipeable-list-item__content', playMsReturnAnimation ? "swipeable-list-item__content--return-".concat(_this.left < 0 ? 'trailing' : 'leading', "-ms") : 'swipeable-list-item__content--return');

        if (!playMsReturnAnimation) {
          listElement.style.transform = "translateX(".concat(isIosType ? to : 0, "px)");
        }
      }

      if (_this.left < 0) {
        _this.playReturnAnimationForTrailingActions({
          to,
          isIosType,
          playMsReturnAnimation
        });
      } else {
        _this.playReturnAnimationForLeadingActions({
          to,
          isIosType,
          playMsReturnAnimation
        });
      }

      if (to === 0) {
        _this.leadingActionsOpened = false;
        _this.trailingActionsOpened = false;

        _this.resetState();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "playRemoveAnimation", function () {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          listElement = _assertThisInitialize2.listElement,
          wrapperElement = _assertThisInitialize2.wrapperElement;

      var listType = _this.props.listType;

      if (listElement) {
        wrapperElement.className = 'swipeable-list-item swipeable-list-item--remove';
        listElement.className = 'swipeable-list-item__content swipeable-list-item__content--remove';
        var isIosType = listType === Type.IOS;
        var leadingFullSwipe = isIosType ? _this.leadingActionsOpened : _this.dragDirection === DragDirection.RIGHT;
        var trailingFullSwipe = isIosType ? _this.trailingActionsOpened : _this.dragDirection === DragDirection.LEFT;
        var translateLength = listElement.offsetWidth * (leadingFullSwipe ? 1 : -1);
        listElement.style.transform = "translateX(".concat(translateLength, "px)");

        _this.setState({
          leadingFullSwipe,
          trailingFullSwipe
        });

        if (leadingFullSwipe) {
          _this.leadingActionsElement.className += ' swipeable-list-item__leading-actions--return';
          _this.leadingActionsElement.style.width = "".concat(Math.abs(translateLength), "px");
        } else if (trailingFullSwipe) {
          _this.trailingActionsElement.className += ' swipeable-list-item__trailing-actions--return';
          _this.trailingActionsElement.style.width = "".concat(Math.abs(translateLength), "px");
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "playActionAnimation", function (_ref5) {
      var type = _ref5.type;

      var _assertThisInitialize3 = _assertThisInitialized(_this),
          listElement = _assertThisInitialize3.listElement;

      if (listElement) {
        switch (type) {
          case ActionAnimation.REMOVE:
            _this.playRemoveAnimation();

            break;

          case ActionAnimation.NONE:
            break;

          default:
            _this.playReturnAnimation();

        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragEnd", function () {
      if (_this.requestedAnimationFrame) {
        cancelAnimationFrame(_this.requestedAnimationFrame);
        _this.requestedAnimationFrame = null;
      }

      if (_this.isSwiping()) {
        var _this$state = _this.state,
            leadingFullSwipe = _this$state.leadingFullSwipe,
            trailingFullSwipe = _this$state.trailingFullSwipe,
            triggerAction = _this$state.triggerAction;
        var onSwipeEnd = _this.props.onSwipeEnd;

        if (onSwipeEnd) {
          onSwipeEnd();
        }

        if (triggerAction) {
          if (leadingFullSwipe) {
            _this.leadingFullSwipeAction();

            return;
          }

          if (trailingFullSwipe) {
            _this.trailingFullSwipeAction();

            return;
          }
        }

        if (_this.leadingActionsOpened || _this.trailingActionsOpened) {
          if (_this.leadingActionsOpened) {
            _this.left = _this.leadingActionsWidth;
          } else if (_this.trailingActionsOpened) {
            _this.left = -_this.trailingActionsWidth;
          }

          _this.playReturnAnimation({
            to: _this.left
          });
        } else {
          _this.playReturnAnimation();

          _this.resetState();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "dragStartedWithinItem", function () {
      var _this$dragStartPoint = _this.dragStartPoint,
          x = _this$dragStartPoint.x,
          y = _this$dragStartPoint.y;
      return x !== -1 && y !== -1;
    });

    _defineProperty(_assertThisInitialized(_this), "setDragDirection", function (x, y) {
      if (_this.dragDirection === DragDirection.UNKNOWN) {
        var _this$dragStartPoint2 = _this.dragStartPoint,
            startX = _this$dragStartPoint2.x,
            startY = _this$dragStartPoint2.y;
        var horizontalDistance = Math.abs(x - startX);
        var verticalDistance = Math.abs(y - startY);

        if (horizontalDistance <= _this.dragHorizontalDirectionThreshold && verticalDistance <= _this.dragVerticalDirectionThreshold) {
          return;
        }

        var angle = Math.atan2(y - startY, x - startX);
        var octant = Math.round(8 * angle / (2 * Math.PI) + 8) % 8;

        switch (octant) {
          case 0:
            if (_this.leadingActionsElement !== null && horizontalDistance > _this.dragHorizontalDirectionThreshold) {
              _this.dragDirection = DragDirection.RIGHT;
            }

            break;

          case 1:
          case 2:
          case 3:
            if (verticalDistance > _this.dragVerticalDirectionThreshold) {
              _this.dragDirection = DragDirection.DOWN;
            }

            break;

          case 4:
            if (_this.trailingActionsElement !== null && horizontalDistance > _this.dragHorizontalDirectionThreshold) {
              _this.dragDirection = DragDirection.LEFT;
            }

            break;

          case 5:
          case 6:
          case 7:
            if (verticalDistance > _this.dragVerticalDirectionThreshold) {
              _this.dragDirection = DragDirection.UP;
            }

            break;

          default:
            _this.dragDirection = DragDirection.UNKNOWN;
        }

        var onSwipeStart = _this.props.onSwipeStart;

        if (onSwipeStart && _this.isSwiping()) {
          onSwipeStart();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isSwiping", function () {
      var blockSwipe = _this.props.blockSwipe;
      var horizontalDrag = _this.dragDirection === DragDirection.LEFT || _this.dragDirection === DragDirection.RIGHT;
      return !blockSwipe && _this.dragStartedWithinItem() && horizontalDrag;
    });

    _defineProperty(_assertThisInitialized(_this), "scheduleUpdatePosition", function () {
      if (_this.requestedAnimationFrame) {
        return;
      }

      _this.requestedAnimationFrame = requestAnimationFrame(function () {
        _this.requestedAnimationFrame = null;

        _this.updatePosition();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updatePosition", function () {
      if (!_this.isSwiping()) {
        return;
      }

      var elapsed = Date.now() - _this.startTime;

      if (elapsed <= FPS_INTERVAL) {
        return;
      }

      var _this$props = _this.props,
          fullSwipeThreshold = _this$props.threshold,
          listType = _this$props.listType;
      var fullSwipe = _this.fullSwipe;
      var isSwipingLeft = _this.left < 0;
      var isSwipingRight = _this.left > 0;

      if (isSwipingLeft) {
        if (_this.onlyLeadingActions) {
          _this.left = 0;
        }

        if (_this.trailingActionsElement && listType === Type.IOS) {
          _this.trailingActionsOpened = Math.abs(_this.left) > _this.trailingActionsWidth;
          _this.leadingActionsOpened = false;
        }
      }

      if (isSwipingRight) {
        if (_this.onlyTrailingActions) {
          _this.left = 0;
        }

        if (_this.leadingActionsElement && listType === Type.IOS) {
          _this.leadingActionsOpened = _this.left > _this.leadingActionsWidth;
          _this.trailingActionsOpened = false;
        }
      }

      if (_this.leadingActionsElement) {
        _this.leadingActionsElement.style.width = "".concat(_this.left < 0 ? 0 : _this.left, "px");
      }

      if (_this.trailingActionsElement) {
        _this.trailingActionsElement.style.width = "".concat(_this.left > 0 ? 0 : -_this.left, "px");
      }

      if (_this.listElement) {
        if (fullSwipe) {
          var _assertThisInitialize4 = _assertThisInitialized(_this),
              offsetWidth = _assertThisInitialize4.listElement.offsetWidth;

          var threshold = offsetWidth * fullSwipeThreshold;

          if (_this.left < -threshold) {
            _this.setState({
              leadingFullSwipe: false,
              trailingFullSwipe: true,
              triggerAction: true,
              scaleTrailing: true
            });
          } else if (_this.left > threshold) {
            _this.setState({
              leadingFullSwipe: true,
              trailingFullSwipe: false,
              triggerAction: true,
              scaleLeading: true
            });
          } else {
            _this.setState({
              scaleLeading: false,
              scaleTrailing: false,
              triggerAction: false
            });
          }
        }

        _this.listElement.style.transform = "translateX(".concat(_this.left, "px)");

        _this.setState({
          isTranslate: _this.left !== 0
        });

        if (_this.props.onSwipeProgress) {
          var listElementWidth = _this.listElement.offsetWidth;
          var swipeDistancePercent = _this.previousSwipeDistancePercent;

          if (listElementWidth !== 0) {
            var swipeDistance = Math.max(0, listElementWidth - Math.abs(_this.left));
            swipeDistancePercent = 100 - Math.round(100 * swipeDistance / listElementWidth);
          }

          if (_this.previousSwipeDistancePercent !== swipeDistancePercent) {
            _this.props.onSwipeProgress(swipeDistancePercent);

            _this.previousSwipeDistancePercent = swipeDistancePercent;
          }
        }
      }

      _this.startTime = Date.now();
    });

    _defineProperty(_assertThisInitialized(_this), "onActionTriggered", function (isDestructive) {
      _this.playActionAnimation({
        type: isDestructive ? ActionAnimation.REMOVE : ActionAnimation.RETURN
      });
    });

    _defineProperty(_assertThisInitialized(_this), "bindListElement", function (ref) {
      return _this.listElement = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "bindWrapperElement", function (ref) {
      return _this.wrapperElement = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "bindLeadingActionsElement", function (ref) {
      return _this.leadingActionsElement = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "bindTrailingActionsElement", function (ref) {
      return _this.trailingActionsElement = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "renderActions", function (actions, type, binder) {
      var _this$props2 = _this.props,
          destructiveCallbackDelay = _this$props2.destructiveCallbackDelay,
          listType = _this$props2.listType;
      var _this$state2 = _this.state,
          leadingFullSwipe = _this$state2.leadingFullSwipe,
          trailingFullSwipe = _this$state2.trailingFullSwipe,
          scaleLeading = _this$state2.scaleLeading,
          scaleTrailing = _this$state2.scaleTrailing;

      var _assertThisInitialize5 = _assertThisInitialized(_this),
          onActionTriggered = _assertThisInitialize5.onActionTriggered,
          setLeadingFullSwipeAction = _assertThisInitialize5.setLeadingFullSwipeAction,
          setTrailingFullSwipeAction = _assertThisInitialize5.setTrailingFullSwipeAction;

      var scaled = listType === Type.MS && (scaleLeading && type === 'leading' || scaleTrailing && type === 'trailing');
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: clsx("swipeable-list-item__".concat(type, "-actions"), {
          ["swipeable-list-item__".concat(type, "-actions--scaled")]: scaled
        }),
        "data-testid": "".concat(type, "-actions"),
        ref: binder
      }, /*#__PURE__*/React__default['default'].createElement(ItemContext.Provider, {
        value: {
          destructiveCallbackDelay,
          listType,
          leadingFullSwipe,
          onActionTriggered,
          scaleLeading,
          scaleTrailing,
          setLeadingFullSwipeAction,
          setTrailingFullSwipeAction,
          trailingFullSwipe
        }
      }, actions));
    });

    _this.state = initialState; // binded elements

    _this.listElement = null;
    _this.leadingActionsElement = null;
    _this.trailingActionsElement = null;
    _this.wrapperElement = null;
    _this.requestedAnimationFrame = null;
    _this.leadingActionsWidth = 0;
    _this.trailingActionsWidth = 0;
    _this.startTime = null;
    _this.previousSwipeDistancePercent = 0;
    _this.leadingFullSwipeAction = null;
    _this.trailingFullSwipeAction = null;
    return _this;
  }

  _createClass(SwipeableListItem, [{
    key: "dragHorizontalDirectionThreshold",
    get: function get() {
      return this.props.swipeStartThreshold || 10;
    }
  }, {
    key: "dragVerticalDirectionThreshold",
    get: function get() {
      return this.props.scrollStartThreshold || 10;
    }
  }, {
    key: "fullSwipe",
    get: function get() {
      var _this$props3 = this.props,
          fullSwipe = _this$props3.fullSwipe,
          listType = _this$props3.listType;

      if (listType === Type.IOS) {
        return fullSwipe;
      }

      return true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resetState();
      this.listElement.addEventListener('mousedown', this.handleDragStartMouse);
      this.listElement.addEventListener('touchstart', this.handleDragStartTouch);
      this.listElement.addEventListener('touchend', this.handleDragEndTouch);
      this.listElement.addEventListener('touchmove', this.handleTouchMove, {
        capture: true,
        passive: false
      });

      if (this.leadingActionsElement) {
        this.leadingActionsWidth = measure(this.leadingActionsElement, function (el) {
          return el.offsetWidth;
        });
      }

      if (this.trailingActionsElement) {
        this.trailingActionsWidth = measure(this.trailingActionsElement, function (el) {
          return el.offsetWidth;
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.requestedAnimationFrame) {
        cancelAnimationFrame(this.requestedAnimationFrame);
        this.requestedAnimationFrame = null;
      }

      this.listElement.removeEventListener('mousedown', this.handleDragStartMouse);
      this.listElement.removeEventListener('touchstart', this.handleDragStartTouch);
      this.listElement.removeEventListener('touchend', this.handleDragEndTouch);
      this.listElement.removeEventListener('touchmove', this.handleTouchMove, {
        capture: true,
        passive: false
      });
    }
  }, {
    key: "onlyLeadingActions",
    get: function get() {
      return this.leadingActionsElement !== null && this.trailingActionsElement === null;
    }
  }, {
    key: "onlyTrailingActions",
    get: function get() {
      return this.leadingActionsElement === null && this.trailingActionsElement !== null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          leadingActions = _this$props4.leadingActions,
          trailingActions = _this$props4.trailingActions;
      var isTranslate = this.state.isTranslate;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: clsx('swipeable-list-item', className, {
          'swipeable-list-item--translate': isTranslate
        }),
        ref: this.bindWrapperElement
      }, leadingActions && this.renderActions(leadingActions, 'leading', this.bindLeadingActionsElement), /*#__PURE__*/React__default['default'].createElement("div", {
        className: "swipeable-list-item__content",
        "data-testid": "content",
        ref: this.bindListElement
      }, children), trailingActions && this.renderActions(trailingActions, 'trailing', this.bindTrailingActionsElement));
    }
  }]);

  return SwipeableListItem;
}(React.PureComponent);

SwipeableListItem.propTypes = {
  blockSwipe: PropTypes__default['default'].bool,
  children: PropTypes__default['default'].node,
  className: PropTypes__default['default'].string,
  destructiveCallbackDelay: PropTypes__default['default'].number,
  fullSwipe: PropTypes__default['default'].bool,
  leadingActions: PropTypes__default['default'].node,
  listType: PropTypes__default['default'].oneOf(Object.values(Type)),
  onSwipeEnd: PropTypes__default['default'].func,
  onSwipeProgress: PropTypes__default['default'].func,
  onSwipeStart: PropTypes__default['default'].func,
  scrollStartThreshold: PropTypes__default['default'].number,
  swipeStartThreshold: PropTypes__default['default'].number,
  threshold: PropTypes__default['default'].number,
  trailingActions: PropTypes__default['default'].node
};

var SwipeAction = function SwipeAction(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$destructive = _ref.destructive,
      destructive = _ref$destructive === void 0 ? false : _ref$destructive,
      _ref$main = _ref.main,
      main = _ref$main === void 0 ? false : _ref$main,
      leading = _ref.leading,
      onClick = _ref.onClick,
      trailing = _ref.trailing,
      _ref$Tag = _ref.Tag,
      Tag = _ref$Tag === void 0 ? 'span' : _ref$Tag;

  var _React$useContext = React__default['default'].useContext(ItemContext),
      destructiveCallbackDelay = _React$useContext.destructiveCallbackDelay,
      leadingFullSwipe = _React$useContext.leadingFullSwipe,
      listType = _React$useContext.listType,
      onActionTriggered = _React$useContext.onActionTriggered,
      setLeadingFullSwipeAction = _React$useContext.setLeadingFullSwipeAction,
      setTrailingFullSwipeAction = _React$useContext.setTrailingFullSwipeAction,
      trailingFullSwipe = _React$useContext.trailingFullSwipe,
      scaleLeading = _React$useContext.scaleLeading,
      scaleTrailing = _React$useContext.scaleTrailing;

  var onHandleClick = React__default['default'].useCallback(function () {
    onActionTriggered(destructive);

    if (destructive) {
      window.setTimeout(function () {
        return onClick();
      }, destructiveCallbackDelay);
    } else {
      onClick();
    }
  }, [destructive, destructiveCallbackDelay, onActionTriggered, onClick]);
  React__default['default'].useEffect(function () {
    if (leading && main) {
      setLeadingFullSwipeAction(onHandleClick);
    }
  }, [leading, main, onHandleClick, setLeadingFullSwipeAction]);
  React__default['default'].useEffect(function () {
    if (trailing && main) {
      setTrailingFullSwipeAction(onHandleClick);
    }
  }, [trailing, main, onHandleClick, setTrailingFullSwipeAction]);
  return /*#__PURE__*/React__default['default'].createElement(Tag, {
    className: clsx('swipe-action', {
      'swipe-action__leading': leading,
      'swipe-action__trailing': trailing,
      'swipe-action__leading--full-swipe-rest': leading && leadingFullSwipe && !main && listType === Type.IOS,
      'swipe-action__leading--full-swipe-main': leading && leadingFullSwipe && main && listType === Type.IOS,
      'swipe-action__trailing--full-swipe-rest': trailing && trailingFullSwipe && !main && listType === Type.IOS,
      'swipe-action__trailing--full-swipe-main': trailing && trailingFullSwipe && main && listType === Type.IOS,
      'swipe-action__grayed': listType === Type.MS && !(scaleLeading || scaleTrailing)
    }, className),
    onClick: onHandleClick
  }, children);
};

SwipeAction.propTypes = {
  children: PropTypes__default['default'].node.isRequired,
  className: PropTypes__default['default'].string,
  destructive: PropTypes__default['default'].bool,
  main: PropTypes__default['default'].bool,
  leading: PropTypes__default['default'].bool,
  onClick: PropTypes__default['default'].func.isRequired,
  trailing: PropTypes__default['default'].bool,
  Tag: PropTypes__default['default'].string
};

var TrailingActions = function TrailingActions(_ref) {
  var children = _ref.children;

  if (children === null || children === undefined) {
    return null;
  }

  if (Array.isArray(children)) {
    return React__default['default'].Children.map(children, function (child, index) {
      return /*#__PURE__*/React__default['default'].cloneElement(child, {
        main: index === children.length - 1,
        trailing: true
      });
    });
  }

  return /*#__PURE__*/React__default['default'].cloneElement(children, {
    main: true,
    trailing: true
  });
};

exports.LeadingActions = LeadingActions;
exports.SwipeAction = SwipeAction;
exports.SwipeableList = SwipeableList;
exports.SwipeableListItem = SwipeableListItem;
exports.TrailingActions = TrailingActions;
exports.Type = Type;
