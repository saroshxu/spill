function configureGame() {
	let menuCont = document.querySelector(".menu");
	let optsCont = document.querySelector(".game-opts");

	menuCont.style.display = "none";
	optsCont.style.display = "flex";
}
function autoConfigure() {
	nOfPlayers("3");
	fillPlayerInfo("3");

	configSelectTruth();
}
function fillPlayerInfo(n) {
	let randomNames = [
		"fuzzyRocket",
		"sleepyHammer",
		"noisyBanana",
		"ancientLaptop",
		"braveToaster",
		"shinyPenguin",
		"dustyMirror",
		"wildCarpet",
		"curvedPizza",
		"silentTornado",
		"angryTeapot",
		"plasticWizard",
		"nervousBucket",
		"greedyCloud",
		"electricSpoon",
		"fragileVolcano",
		"lazyCactus",
		"mysticPillow",
		"grumpySatellite",
		"icyKeyboard",
		"goldenLizard",
		"rustyHelmet",
		"cheerfulZombie",
		"tinySpaceship",
		"oddCucumber",
		"brokenCompass",
		"fancyShovel",
		"rapidOctopus",
		"spicyWindow",
		"lonelyGuitar",
		"wickedMarble",
		"hollowPlanet",
		"bitterSnowman",
		"crookedLantern",
		"curiousAnchor",
		"stealthyPancake",
		"fluffyMeteor",
		"weirdTractor",
		"heavyBubble",
		"noblePickle",
		"chaoticNotebook",
		"sneakyDonut",
		"frozenParrot",
		"clumsyDragon",
		"gentleHelmet",
		"shallowRiver",
		"brightMolecule",
		"stormyCookie",
		"dustyRobot",
		"randomPirate",
		"saltyPrinter",
		"glowingCandle",
		"wobblyBridge",
		"rapidCannon",
		"muddyFalcon",
		"vividHelmet",
		"stripedPumpkin",
		"tastyCircuit",
		"stormyTeacup",
		"blanketShark",
		"crystalMonkey",
		"dustyRocket",
		"gentleFork",
		"massivePebble",
		"tinyLaptop",
		"gracefulAnvil",
		"meltingClock",
		"plasticFalcon",
		"itchyPlanet",
		"spottedWizard",
		"velvetTruck",
		"rusticDonkey",
		"hastyMirror",
		"magneticCarrot",
		"brokenFalcon",
		"curlyMeteor",
		"spikyTeapot",
		"foggyCompass",
		"ancientPickaxe",
		"hollowCoconut",
		"silentRaccoon",
		"burningWallet",
		"icyFalcon",
		"jollyHelmet",
		"fragileTractor",
		"shakyLantern",
		"mellowCactus",
		"brightOtter",
		"dustyAnchor",
		"noisyMarble",
		"steepMountain",
		"liquidNotebook",
		"proudParrot",
		"wickedTurtle",
		"zanyCannon",
		"bouncySatellite",
		"dizzyShovel",
		"gentleVolcano",
		"swiftCucumber",
		"loyalHammer",
		"fancyOctopus",
		"wearyDragon",
		"sillyMeteor",
		"grittyBanana",
		"shallowRocket",
		"darkPillow",
		"fieryPenguin",
		"oddHelmet",
		"sneakyLaptop",
		"bitterWizard",
		"curiousPickle",
		"frozenMonkey",
		"goldenTeapot",
		"crookedShark",
		"loudGuitar",
		"mysticBubble",
		"briskCarpet",
		"lonelyFalcon",
		"smoothTractor",
		"electricMango",
		"cheekyZombie",
		"dustyPumpkin",
		"glassyAnchor",
		"heavyCandle",
		"silentPickaxe",
		"wildWallet",
		"fuzzyDragon",
		"nervousRaccoon",
		"politeSpaceship",
		"stormyMolecule",
		"lazyHelmet",
		"braveTeacup",
		"twistedCompass",
		"icyNotebook",
		"bumpyDonut",
		"stripedRocket",
		"gentleCannon",
		"hastyPenguin",
		"mightyBanana",
		"weirdPillow",
		"curvedShovel",
		"meltingSatellite",
		"fancyCarrot",
		"dustyOtter",
		"rapidLantern",
		"nobleFalcon",
		"shinyPickle",
		"chaoticGuitar",
		"agileSofa",
		"brutalTeacup",
		"calmAsteroid",
		"dustyFalcon",
		"eagerCactus",
		"fierceLadder",
		"giantPebble",
		"happyWrench",
		"icyTomato",
		"jumpyAnchor",
		"kindVolcano",
		"looseHelmet",
		"muddySpoon",
		"narrowPumpkin",
		"orangeSatellite",
		"paleDragon",
		"quickToaster",
		"roughMeteor",
		"softPickaxe",
		"tallCarpet",
		"uglyParrot",
		"vastLantern",
		"warmDonkey",
		"youngCannon",
		"zestyLaptop",
		"baldCucumber",
		"crispWallet",
		"deepShovel",
		"elasticRobot",
		"fancyMolecule",
		"gracefulFalcon",
		"hollowBanana",
		"itchyCompass",
		"jollyMeteor",
		"knobbyHammer",
		"luckyOctopus",
		"mildSpaceship",
		"noisyHelmet",
		"ovalTeapot",
		"pricklyPenguin",
		"quirkyRocket",
		"rustyPancake",
		"saltyAnchor",
		"tenderGuitar",
		"unevenCloud",
		"vividDragon",
		"wittyTractor",
		"xenialWizard",
		"yellowCandle",
		"zanyMango",
		"ancientSofa",
		"blurryPickle",
		"clumsyCactus",
		"daringFalcon",
		"elegantShark",
		"flimsyLantern",
		"greedyTeapot",
		"humbleMeteor",
		"intenseCarrot",
		"jaggedSatellite",
		"keenDonut",
		"livelyRobot",
		"mysticHammer",
		"neatBanana",
		"oddTractor",
		"plainCompass",
		"quietVolcano",
		"rapidPillow",
		"shyFalcon",
		"toughOtter",
		"urbanCannon",
		"vaguePumpkin",
		"wavyLaptop",
		"xericCactus",
		"youngWizard",
		"zealousDragon",
		"briskMango",
		"crookedSpoon",
		"dullAnchor",
		"earlyRocket",
		"frozenShovel",
		"grandHelmet",
		"harshPancake",
		"icyLantern",
		"jadedMonkey",
		"kindlyPickaxe",
		"loudTeapot",
		"modernFalcon",
		"nobleCarpet",
		"opaqueMeteor",
		"proudCandle",
		"rarePenguin",
		"sharpSatellite",
		"tidyGuitar",
		"uglyTractor",
		"vividBanana",
		"wildCompass",
		"xeroxRobot",
		"youngFalcon",
		"zippyLaptop",
		"abrasiveTiger",
		"absurdCannon",
		"acidicNotebook",
		"adorableMeteor",
		"alertPumpkin",
		"alienToaster",
		"amusedShark",
		"anxiousLemon",
		"arcticGuitar",
		"arrogantPickle",
		"awkwardHelmet",
		"bitterCactus",
		"bizarreAnchor",
		"blackenedDonut",
		"boldMolecule",
		"bouncyWallet",
		"braveLadder",
		"breezyFalcon",
		"briefDragon",
		"brightToaster",
		"bubblyHammer",
		"bulkyPenguin",
		"busyCandle",
		"butteryRocket",
		"candidMonkey",
		"carefulOtter",
		"carelessMeteor",
		"charmingTractor",
		"cheerfulSofa",
		"chillyBanjo",
		"circularCompass",
		"cleverShovel",
		"cloudyLaptop",
		"clumsyTeacup",
		"coarseLantern",
		"colorfulPickaxe",
		"confusedCannon",
		"coolPillow",
		"courageousRobot",
		"crazySatellite",
		"creamyPumpkin",
		"creepyParrot",
		"crispyDragon",
		"cruelWallet",
		"curiousSpoon",
		"cuteVolcano",
		"dangerousCarrot",
		"darkMonkey",
		"dazzlingHelmet",
		"delayedFalcon",
		"delightfulCactus",
		"denseMeteor",
		"dirtyGuitar",
		"distantRocket",
		"dramaticOtter",
		"dryShark",
		"easternDonkey",
		"easyWizard",
		"edgyLaptop",
		"elasticAnchor",
		"embarrassedBanana",
		"emptyCandle",
		"energeticPenguin",
		"enormousPickle",
		"epicTractor",
		"evilTeapot",
		"excitedHammer",
		"expensiveSofa",
		"fadedLantern",
		"faintDragon",
		"faithfulRobot",
		"famousFalcon",
		"fastCannon",
		"fearlessMango",
		"feistyCompass",
		"fickleMonkey",
		"filthyPumpkin",
		"flatSatellite",
		"fluffyWallet",
		"foolishCarpet",
		"formalPickaxe",
		"friendlyMeteor",
		"funnyHelmet",
		"futuristicCactus",
		"giddyRocket",
		"glamorousShovel",
		"gloomyParrot",
		"goofyLaptop",
		"gracefulCannon",
		"grumpySofa",
		"hairyDragon",
		"handyAnchor",
		"happyPickle",
		"harmlessRobot",
		"healthyGuitar",
		"helpfulBanana",
		"heroicFalcon",
		"hiddenMeteor",
		"hilariousTeapot",
		"honestOtter",
		"horriblePumpkin",
		"hungryWizard",
		"icyCarpet",
		"idealMonkey",
		"imaginaryRocket",
		"imperfectHelmet",
		"importantCactus",
		"impressiveDonut",
		"innocentDragon",
		"itchySatellite",
		"jazzyWallet",
		"jealousFalcon",
		"jitteryLaptop",
		"joyfulParrot",
		"juicyMango",
		"kindRobot",
		"lameAnchor",
		"largeMeteor",
		"lateCannon",
		"legalShovel",
		"lightPickle",
		"littlePumpkin",
		"lonelyWizard",
		"loyalDragon",
		"luckySofa",
		"madMonkey",
		"magicalFalcon",
		"massiveRocket",
		"meanCactus",
		"messyLaptop",
		"miniHelmet",
		"modernTeapot",
		"moodyDonut",
		"moralGuitar",
		"mysteriousPenguin",
		"naiveCarrot",
		"nastySatellite",
		"naturalAnchor",
		"naughtyParrot",
		"needyBanana",
		"nervousWizard",
		"niceRobot",
		"normalCannon",
		"nuttyMeteor",
		"obedientFalcon",
		"obscureDragon",
		"oddPumpkin",
		"oldLaptop",
		"openRocket",
		"optimisticOtter",
	];
	const colors = [
		"#4285F4", // Google Blue
		"#DB4437", // Google Red
		"#F4B400", // Google Yellow
		"#0F9D58", // Google Green
		"#FF5722", // bright orange
		"#9C27B0", // bright purple
		"#03A9F4", // bright cyan
		"#8BC34A", // bright lime green
		"#FFC107", // bright amber
		"#E91E63", // bright pink
		"#00BCD4", // bright teal
		"#FF9800", // vivid orange
		"#673AB7", // deep purple
		"#4CAF50", // vivid green
		"#F44336", // vivid red
		"#2196F3", // vivid blue
		"#CDDC39", // lime
		"#FFEB3B", // bright yellow
		"#795548", // earthy brown
	];

	for (i = 1; i <= n; i++) {
		let randomIndex = Math.floor(Math.random() * randomNames.length);
		let randomItem = randomNames[randomIndex];
		let randomIndexC = Math.floor(Math.random() * colors.length);
		let randomItemC = colors[randomIndexC];

		document.querySelector("#player" + i + "Info input").value = randomItem;
		document.querySelector("#player" + i + "Info .color-token").innerHTML =
			randomItemC;
		document.querySelector(
			"#player" + i + "Info .color-picker .color",
		).style.backgroundColor = randomItemC;
	}
}
function changeColor(n) {
	const colors = [
		"#4285F4", // Google Blue
		"#DB4437", // Google Red
		"#F4B400", // Google Yellow
		"#0F9D58", // Google Green
		"#FF5722", // bright orange
		"#9C27B0", // bright purple
		"#03A9F4", // bright cyan
		"#8BC34A", // bright lime green
		"#FFC107", // bright amber
		"#E91E63", // bright pink
		"#00BCD4", // bright teal
		"#FF9800", // vivid orange
		"#673AB7", // deep purple
		"#4CAF50", // vivid green
		"#F44336", // vivid red
		"#2196F3", // vivid blue
		"#CDDC39", // lime
		"#FFEB3B", // bright yellow
		"#795548", // earthy brown
	];
	let randomIndexC = Math.floor(Math.random() * colors.length);
	let randomItemC = colors[randomIndexC];

	document.querySelector("#player" + n + "Info .color-token").innerHTML =
		randomItemC;
	document.querySelector(
		"#player" + n + "Info .color-picker .color",
	).style.backgroundColor = randomItemC;
}
function configSelectTruth() {
	let isAlreadySelected = document.querySelector("#isTruthSelected");
	if (isAlreadySelected.innerHTML === "true") {
		document.querySelector(".truth").style.border =
			"1px solid rgba(255,255,255,0.05)";
		isAlreadySelected.innerHTML = "false";
	} else {
		document.querySelector(".truth").style.border =
			"1px solid var(--accent)";
		isAlreadySelected.innerHTML = "true";
	}
}
function configSelectDare() {
	let isAlreadySelected = document.querySelector("#isDareSelected");
	if (isAlreadySelected.innerHTML === "true") {
		document.querySelector(".dare").style.border =
			"1px solid rgba(255,255,255,0.05)";
		isAlreadySelected.innerHTML = "false";
	} else {
		document.querySelector(".dare").style.border =
			"1px solid var(--accent)";
		isAlreadySelected.innerHTML = "true";
	}
}
function nOfPlayers(n) {
	// reset others
	for (i = 1; i <= 8; i++) {
		document.querySelector("#npb" + i).style.border =
			"1px solid rgba(255,255,255,0.05)";
	}
	document.querySelector("#npb" + n).style.border = "1px solid var(--accent)";

	// reset input bars
	for (i = 1; i <= 8; i++) {
		document.querySelector("#player" + i + "Info").style.display = "none";
	}
	for (i = 1; i <= n; i++) {
		document.querySelector("#player" + i + "Info").style.display = "flex";
	}

	document.querySelector("#np-token").innerHTML = n;
	fillPlayerInfo(n);
}
function isValidConfig() {
	let npToken = document.querySelector("#np-token");
	let isTruthSelected = document.querySelector("#isTruthSelected");
	let isDareSelected = document.querySelector("#isDareSelected");
	if (
		!(parseInt(npToken.innerHTML) >= 1 && parseInt(npToken.innerHTML) <= 8)
	) {
		document.querySelector(".player-config-error").innerHTML =
			"Min and max no of players are 1 and 8 respectively..";
		document.querySelector(".player-config-error").style.display = "flex";

		return false;
	}
	for (i = 1; i <= parseInt(npToken.innerHTML); i++) {
		let val = document.querySelector("#player" + i + "Info input").value;
		if (
			val.trim() === "" ||
			val.trim() === null ||
			val.trim() === undefined
		) {
			document.querySelector(".player-config-error").innerHTML =
				"Name of player " + i + " is missing..";
			document.querySelector(".player-config-error").style.display =
				"flex";

			return false;
		}
	}
	if (
		!(
			isTruthSelected.innerHTML === "true" ||
			isDareSelected.innerHTML === "true"
		)
	) {
		document.querySelector(".game-config-error").innerHTML =
			"Select at least one, Truth OR Dare..";
		document.querySelector(".game-config-error").style.display = "flex";

		return false;
	}

	// all checks passed
	return true;
}
function saveConfig() {
	if (isValidConfig()) {
		// save
		let npToken = document.querySelector("#np-token");
		let isTruthSelected = document.querySelector("#isTruthSelected");
		let isDareSelected = document.querySelector("#isDareSelected");

		localStorage.setItem("appSpill-gameConfig-NofP", npToken.innerHTML);
		localStorage.setItem(
			"appSpill-gameConfig-isTruth",
			isTruthSelected.innerHTML,
		);
		localStorage.setItem(
			"appSpill-gameConfig-isDare",
			isDareSelected.innerHTML,
		);

		for (i = 1; i <= 8; i++) {
			if (
				localStorage.getItem(
					"appSpill-gameConfig-player" + i + "Name",
				) == null
			) {
			} else {
				localStorage.removeItem(
					"appSpill-gameConfig-player" + i + "Name",
				);
			}
		}
		for (i = 1; i <= 8; i++) {
			if (
				localStorage.getItem(
					"appSpill-gameConfig-player" + i + "Color",
				) == null
			) {
			} else {
				localStorage.removeItem(
					"appSpill-gameConfig-player" + i + "Color",
				);
			}
		}
		for (i = 1; i <= parseInt(npToken.innerHTML); i++) {
			let name = document.querySelector(
				"#player" + i + "Info input",
			).value;
			let color = document.querySelector(
				"#player" + i + "Info .color-token",
			).innerHTML;
			localStorage.setItem(
				"appSpill-gameConfig-player" + i + "Name",
				name,
			);
			localStorage.setItem(
				"appSpill-gameConfig-player" + i + "Color",
				color,
			);
		}

		document.querySelector(".game-opts").style.display = "none";
		document.querySelector(".menu").style.display = "flex";
	} else {
		return;
	}
}
function startGame() {
	let n = parseInt(document.querySelector("#np-token").innerHTML);
	for (i = 1; i <= n; i++) {
		document.querySelector("#token-player" + i + "Spills").innerHTML = "0";
		document.querySelector("#token-player" + i + "Pass").innerHTML = "0";
	}
	document.querySelector(".menu").style.display = "none";
	document.querySelector(".curve-cont").style.display = "none";
	document.querySelector(".game").style.display = "flex";

	document.querySelector("#token-currentPlayer").innerHTML = "1";
	document.querySelector("#token-totalSpills").innerHTML = "0";

	document.querySelector("#statsTotal").innerHTML = "0";
	document.querySelector("#statsSpills").innerHTML = "0";
	document.querySelector("#statsPass").innerHTML = "0";

	document.querySelector(".current-player-name").innerHTML =
		"~ " + localStorage.getItem("appSpill-gameConfig-player1Name");

	backLight("1");
	spawnSpill();
}
function backLight(n) {
	if (n != "none") {
		let color = localStorage.getItem(
			"appSpill-gameConfig-player" + n + "Color",
		);
		document.querySelector(".light-1").style.backgroundColor = color;
		document.querySelector(".light-2").style.backgroundColor = color;
		document.querySelector(".light-3").style.backgroundColor = color;
	} else {
		document.querySelector(".light-1").style.backgroundColor =
			"transparent";
		document.querySelector(".light-2").style.backgroundColor =
			"transparent";
		document.querySelector(".light-3").style.backgroundColor =
			"transparent";
	}
}
function cheatAlgorithm(truths) {
	const allowedPlayers = ["sarosh", "Sarosh", "roshni", "Roshni"];
	const currentPlayerEl = document.querySelector(".current-player-name");
	if (!currentPlayerEl) return null;
	const currentPlayer = currentPlayerEl.innerText.trim();
	if (!allowedPlayers.includes(currentPlayer)) {
		return null;
	}
	const specialIds = [];
	const cheatProbability = 0.69;
	if (Math.random() >= cheatProbability) return null;
	const specialTruths = truths.filter((t) => specialIds.includes(t.id));
	if (specialTruths.length === 0) return null;
	const maxAttempts = specialTruths.length;
	let attempts = 0;
	while (attempts < maxAttempts) {
		const randomIndex = Math.floor(Math.random() * specialTruths.length);
		const selected = specialTruths[randomIndex];
		const storageKey = "appSpill-cheatConfig-" + selected.id;
		if (!localStorage.getItem(storageKey)) {
			localStorage.setItem(storageKey, "used");
			return selected;
		}
		attempts++;
	}
	return null;
}
async function spawnSpill() {
	const spillTxtElem = document.querySelector(".spill-txt");

	// Get current player IDs
	const npTokenEl = document.querySelector("#np-token");
	const currentPlayerEl = document.querySelector("#token-currentPlayer");
	if (!npTokenEl || !currentPlayerEl) return;

	const n = parseInt(npTokenEl.innerHTML);
	const currentPlayerId = parseInt(currentPlayerEl.innerHTML);

	// Player-specific usedIndexes element ID
	const usedIndexesElem = document.querySelector(
		`#token-usedIndexes-${currentPlayerId}`,
	);
	const allUsedElem = document.querySelector(".are-all-used");

	try {
		const res = await fetch("src/assets/json/truths.json");
		const truths = await res.json();
		const total = truths.length;

		if (total === 0) {
			spillTxtElem.innerHTML = `<span>"</span>Check developer console!"`;
			console.error("No truths available!");
			return;
		}

		// Parse used indexes for this player
		let usedIndexes = [];
		if (usedIndexesElem && usedIndexesElem.innerText.trim() !== "") {
			usedIndexes = usedIndexesElem.innerText
				.split(",")
				.map((i) => parseInt(i.trim()))
				.filter((i) => !isNaN(i));
		}

		console.log("=== PICKING TRUTH ===");
		console.log("Current Player:", currentPlayerId);
		console.log("Total truths:", total);
		console.log("Used indexes:", usedIndexes);

		// Build array of AVAILABLE indexes (not used)
		const availableIndexes = [];
		for (let i = 0; i < total; i++) {
			if (!usedIndexes.includes(i)) {
				availableIndexes.push(i);
			}
		}

		console.log("Available indexes:", availableIndexes);
		console.log("Available count:", availableIndexes.length);

		let randomIndex;
		let shouldReset = false;

		// Check if all truths have been used
		if (availableIndexes.length === 0) {
			console.log("⚠️ All truths used! Resetting...");
			shouldReset = true;

			// CHECK AND DISPLAY WHO COMPLETED **BEFORE** RESETTING
			if (allUsedElem) {
				const playerNames = [];
				const maxPlayers = parseInt(
					document.querySelector("#np-token").innerHTML,
				);
				for (let pid = 1; pid <= maxPlayers; pid++) {
					const playerUsedIndexes = document.querySelector(
						`#token-usedIndexes-${pid}`,
					);
					if (!playerUsedIndexes) continue;
					const indexes = playerUsedIndexes.innerText
						.split(",")
						.map((i) => parseInt(i.trim()))
						.filter((i) => !isNaN(i));

					console.log(`Player ${pid} used indexes:`, indexes);

					if (indexes.length >= total) {
						const name = localStorage.getItem(
							`appSpill-gameConfig-player${pid}Name`,
						);
						console.log(
							`Player ${pid} (${name}) has completed all truths`,
						);
						if (name) playerNames.push(name);
					}
				}

				if (playerNames.length > 0) {
					allUsedElem.style.display = "flex";
					allUsedElem.innerText = `All truths used by ${playerNames.join(", ")}`;
					console.log(
						"Displaying completion message for:",
						playerNames,
					);
				}
			}

			// NOW RESET THE CURRENT PLAYER
			usedIndexes = [];
			if (usedIndexesElem) usedIndexesElem.innerText = "";

			// Pick from all indexes since we're resetting
			randomIndex = Math.floor(Math.random() * total);
		} else {
			// Pick randomly from ONLY available indexes
			const randomPosition = Math.floor(
				Math.random() * availableIndexes.length,
			);
			randomIndex = availableIndexes[randomPosition];
			console.log(
				`Picked position ${randomPosition} from available indexes`,
			);

			if (allUsedElem) allUsedElem.style.display = "none";
		}

		console.log("Final selected index:", randomIndex);
		console.log(
			"Index was already used?",
			usedIndexes.includes(randomIndex),
		);

		// Save this index for this player
		usedIndexes.push(randomIndex);
		if (usedIndexesElem) usedIndexesElem.innerText = usedIndexes.join(",");

		console.log("Updated usedIndexes:", usedIndexes);
		console.log("=== END PICKING ===\n");

		// Get cheat truth if allowed
		let selectedTruth = cheatAlgorithm(truths);
		if (!selectedTruth) {
			selectedTruth = truths[randomIndex];
		}

		// Display truth
		spillTxtElem.innerHTML = `<span>"</span>${selectedTruth.content}"`;

		// Handle tags
		const tagElements = {
			funny: document.querySelector("#funnyTag"),
			hot: document.querySelector("#hotTag"),
			spicy: document.querySelector("#spicyTag"),
			life: document.querySelector("#lifeTag"),
		};

		Object.values(tagElements).forEach((el) => {
			if (el) el.style.display = "none";
		});

		const splitTags = selectedTruth.tags
			.split(",")
			.map((t) => t.trim().toLowerCase());

		splitTags.forEach((tag) => {
			if (tagElements[tag]) tagElements[tag].style.display = "flex";
		});
	} catch (err) {
		spillTxtElem.innerHTML = `<span>"</span>Check developer console!"`;
		console.error("Failed to load truths:", err);
	}
}
async function next() {
	let n = parseInt(document.querySelector("#np-token").innerHTML);
	let currentPlayer = parseInt(
		document.querySelector("#token-currentPlayer").innerHTML,
	);
	let currentTotalSpills = parseInt(
		document.querySelector("#token-totalSpills").innerHTML,
	);
	document.querySelector("#token-totalSpills").innerHTML =
		currentTotalSpills + 1;
	let currentPlayerSpills = parseInt(
		document.querySelector("#token-player" + currentPlayer + "Spills")
			.innerHTML,
	);
	document.querySelector(
		"#token-player" + currentPlayer + "Spills",
	).innerHTML = currentPlayerSpills + 1;

	let nextPlayer = null;
	if (currentPlayer + 1 > n) {
		nextPlayer = "1";
	} else {
		nextPlayer = currentPlayer + 1;
	}

	document.querySelector("#statsTotal").innerHTML = currentTotalSpills + 1;
	let nextPlayerSpills = document.querySelector(
		"#token-player" + nextPlayer + "Spills",
	).innerHTML;
	let nextPlayerPass = document.querySelector(
		"#token-player" + nextPlayer + "Pass",
	).innerHTML;
	document.querySelector("#statsSpills").innerHTML = nextPlayerSpills;
	document.querySelector("#statsPass").innerHTML = nextPlayerPass;

	document.querySelector(".current-player-name").innerHTML =
		"~ " +
		localStorage.getItem(
			"appSpill-gameConfig-player" + nextPlayer + "Name",
		);

	document.querySelector("#token-currentPlayer").innerHTML = nextPlayer;

	backLight(nextPlayer);
	await spawnSpill();
}
async function pass() {
	let n = parseInt(document.querySelector("#np-token").innerHTML);
	let currentPlayer = parseInt(
		document.querySelector("#token-currentPlayer").innerHTML,
	);
	let currentTotalSpills = parseInt(
		document.querySelector("#token-totalSpills").innerHTML,
	);
	document.querySelector("#token-totalSpills").innerHTML =
		currentTotalSpills + 1;
	let currentPlayerPass = parseInt(
		document.querySelector("#token-player" + currentPlayer + "Pass")
			.innerHTML,
	);
	document.querySelector("#token-player" + currentPlayer + "Pass").innerHTML =
		currentPlayerPass + 1;

	let nextPlayer = null;
	if (currentPlayer + 1 > n) {
		nextPlayer = "1";
	} else {
		nextPlayer = currentPlayer + 1;
	}

	document.querySelector("#statsTotal").innerHTML = currentTotalSpills + 1;
	let nextPlayerSpills = document.querySelector(
		"#token-player" + nextPlayer + "Spills",
	).innerHTML;
	let nextPlayerPass = document.querySelector(
		"#token-player" + nextPlayer + "Pass",
	).innerHTML;
	document.querySelector("#statsSpills").innerHTML = nextPlayerSpills;
	document.querySelector("#statsPass").innerHTML = nextPlayerPass;

	document.querySelector(".current-player-name").innerHTML =
		"~ " +
		localStorage.getItem(
			"appSpill-gameConfig-player" + nextPlayer + "Name",
		);

	document.querySelector("#token-currentPlayer").innerHTML = nextPlayer;

	backLight(nextPlayer);
	await spawnSpill();
}
function quit() {
	document.querySelector(".game").style.display = "none";
	document.querySelector(".menu").style.display = "flex";
	document.querySelector(".curve-cont").style.display = "flex";
	backLight("none");
}
