class GUIOptimizer extends MonoBehaviour
{
	public var hudWeapons : HudWeapons;
	public var mainMenu : MainMenuScreen;
	public var sarge : SargeManager;
	public var achievements : AchievmentScreen;
	public static var score : int = 0;

	function OnGUI()
	{ 
		var evt : Event = Event.current;
		GUI.Box(Rect(Screen.width-300,0,150,30),"Score: "+score);
		
		 
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