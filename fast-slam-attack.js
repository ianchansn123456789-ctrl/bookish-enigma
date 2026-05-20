(function() {
    'use strict';
    let isAttacking = false;
    const SLAM_DURATION = 150;
    let attackCount = 0;
    
    console.log('=== GoBattle Fast Slam Attack Mod ===');
    console.log('Click to attack | Press X to cancel');
    
    // Main attack listener
    document.addEventListener('click', function() {
        if (isAttacking) return;
        isAttacking = true;
        attackCount++;
        console.log('ATTACK #' + attackCount);
        
        setTimeout(() => { 
            isAttacking = false;
            console.log('ATTACK COMPLETE');
        }, SLAM_DURATION);
    }, true);
    
    // Cancel with X key
    document.addEventListener('keydown', function(e) {
        if ((e.key === 'x' || e.key === 'X') && isAttacking) {
            isAttacking = false;
            console.log('CANCELLED');
        }
    }, true);
    
    console.log('MOD LOADED AND READY');
})();