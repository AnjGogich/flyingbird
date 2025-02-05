const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.ScriptsInEvents.списоксобытий1_Event1,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.ScriptsInEvents.списоксобытий1_Event3,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.RotateClockwise,
		C3.Plugins.System.Exps.dt,
		C3.ScriptsInEvents.списоксобытий1_Event6,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.ScriptsInEvents.списоксобытий1_Event11,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.ScriptsInEvents.списоксобытий1_Event13,
		C3.ScriptsInEvents.списоксобытий1_Event19,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{небо: 0},
	{Платформер: 0},
	{птица: 0},
	{монета: 0},
	{название: 0},
	{играть: 0},
	{правила: 0},
	{фонправила: 0},
	{правилатекст: 0},
	{меню: 0},
	{фоннеба: 0},
	{Scored: 0},
	{столб: 0},
	{счет: 0},
	{земля: 0},
	{фонптицы: 0},
	{низземли: 0},
	{верхземли: 0},
	{Тач: 0},
	{трубаверх: 0},
	{счетМонет: 0},
	{Клавиатура: 0},
	{монеты: 0},
	{JumpStrength: 0},
	{SCROLLSPEED: 0},
	{SecondsPerObstade: 0}
];

self.InstanceType = {
	небо: class extends self.ITiledBackgroundInstance {},
	птица: class extends self.ISpriteInstance {},
	монета: class extends self.ISpriteInstance {},
	название: class extends self.ITextInstance {},
	играть: class extends self.IButtonInstance {},
	правила: class extends self.IButtonInstance {},
	фонправила: class extends self.ITiledBackgroundInstance {},
	правилатекст: class extends self.ITextInstance {},
	меню: class extends self.IButtonInstance {},
	фоннеба: class extends self.ITiledBackgroundInstance {},
	столб: class extends self.ISpriteInstance {},
	счет: class extends self.ITextInstance {},
	земля: class extends self.ISpriteInstance {},
	фонптицы: class extends self.ITiledBackgroundInstance {},
	низземли: class extends self.ISpriteInstance {},
	верхземли: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	трубаверх: class extends self.ISpriteInstance {},
	счетМонет: class extends self.ITextInstance {},
	Клавиатура: class extends self.IInstance {}
}