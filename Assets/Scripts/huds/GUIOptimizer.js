class GUIOptimizer extends MonoBehaviour
{
	public var hudWeapons : HudWeapons;
	public var mainMenu : MainMenuScreen;
	public var sarge : SargeManager;
	public var achievements : AchievmentScreen;
	public static var score : int = 0;
	public static var dead : int = 0;
	public static var killed : int = 0;
	private var timer : System.DateTime;
	private var startTimer : boolean = false;
	public var customGuiStyle : GUIStyle;
		public var ownageSound : AudioClip;
			private var ownageSoundSource : AudioSource;

	function OnGUI()
	{ 
		var evt : Event = Event.current;
		 
		GUI.Box(Rect(Screen.width-300,0,150,30),"Score: "+score);
		if(killed == 1){
			if(!startTimer){
				timer = System.DateTime.Now;
				startTimer = true;
			}
		   GUI.Label(Rect(250,200,Screen.width,Screen.height),"You were killed!",customGuiStyle);
		var ts2 : System.TimeSpan = System.DateTime.Now - timer;
		   if(ts2.Seconds > 5){
			killed = 0;
			startTimer = false;
			}
		}
		if(dead==1){
		if(!startTimer){
				timer = System.DateTime.Now;
				startTimer = true;
			
			}

		   GUI.Label(Rect(250,100,Screen.width,Screen.height),"You were killed!",customGuiStyle);
		 
		   var ts : System.TimeSpan  = System.DateTime.Now - timer;
			if(ts.Seconds > 5){
				dead = 0;
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