class GUIOptimizer extends MonoBehaviour
{
	public var hudWeapons : HudWeapons;
	public var mainMenu : MainMenuScreen;
	public var sarge : SargeManager;
	public var achievements : AchievmentScreen;
	public static var score : int = 0;
	public static var dead : boolean = false;
	public static var killed : boolean = false;
	public var timer : Object;
	private var startTimer : boolean = false;

	function OnGUI()
	{ 
		var evt : Event = Event.current;
		GUI.Box(Rect(Screen.width-300,0,150,30),"Score: "+score);
		if(killed){
			if(!startTimer){
				timer = System.DateTime.Now;
				startTimer = true;
			}
		   GUI.Label(Rect(0,0,Screen.width,Screen.height),"You were killed!");
		System.TimeSpan ts = new System.TimeSpan(System.DateTime.Now.Ticks - timer.Ticks);
		   if(ts.Seconds > 5){
			killed = false;
			startTimer = false;
			}
		}
		if(dead){
		if(!startTimer){
				timer = System.DateTime.Now;
				startTimer = true;
			}
		   GUI.Label(Rect(0,0,Screen.width,Screen.height),"You were killed!");
		System.TimeSpan ts = new System.TimeSpan(System.DateTime.Now.Ticks - timer.Ticks);
		   if(ts.Seconds > 5){
			dead = false;
			startTimer = false;
			}
			
		}
		 
		if(mainMenu != null) mainMenu.DrawGUI(evt);
 
        if(achievements != null) achievements.DrawGUI(evt);

		if(evt.type == EventType.Repaint)
		{
			if(hudWeapons != null) hudWeapons.DrawGUI(evt);
			if(sarge != null) sarge.DrawGUI(evt);
			
		}
	}
}
;