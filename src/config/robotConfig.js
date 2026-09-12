/**
 * @typedef {object} Emotion
 * @property {string} eyeColor - The primary color for eyes, glows, and effects.
 * @property {string} secondaryColor - The secondary color for glows and accents.
 * @property {number} mouthIntensity - A general intensity for mouth animations.
 * @property {number} headTilt - The resting tilt angle of the head (in radians).
 * @property {number} eyeScale - The base scale of the eyes.
 * @property {number} mouthCurve - The curvature of the mouth (positive for smile, negative for frown).
 * @property {number} pulseSpeed - The speed of pulsing/breathing animations.
 * @property {number} eyebrowAngle - The resting angle of the eyebrows (in radians).
 * @property {number} energyLevel - A multiplier (0-1) for overall animation intensity.
 * @property {number} particleCount - The target number of particles to display.
 */

/**
 * @typedef {object} RobotConfig
 * @property {object} head - Head movement parameters.
 * @property {number} head.lerp - Lerp factor for head following the cursor.
 * @property {number} head.idleAmp - Amplitude of the idle breathing animation.
 * @property {number} head.idleSpeed - Speed of the idle breathing animation.
 * @property {number} head.bounceAmp - Amplitude of the bouncing animation.
 * @property {object} eyes - Eye movement and blinking parameters.
 * @property {number} eyes.lerp - Lerp factor for eyes following the cursor.
 * @property {[number, number]} eyes.blinkInterval - The min and max time (ms) between blinks.
 * @property {number} eyes.blinkDuration - The duration (ms) of a single blink.
 * @property {number} eyes.xRange - The maximum horizontal movement range for the eyes.
 * @property {number} eyes.yRange - The maximum vertical movement range for the eyes.
 * @property {number} eyes.lookAroundInterval - The interval (ms) for the robot to look around randomly.
 * @property {object} antenna - Antenna animation parameters.
 * @property {number} antenna.wobbleAmp - Amplitude of the antenna wobble.
 * @property {number} antenna.wobbleSpeed - Speed of the antenna wobble.
 * @property {number} antenna.signalSpeed - Speed of the antenna signal pulse effect.
 * @property {Object<string, Emotion>} emotions - A map of emotional states to their specific parameters.
 */

/**
 * @type {RobotConfig}
 */
const CONFIG = {
  head: { lerp: 0.08, idleAmp: 0.05, idleSpeed: 0.8, bounceAmp: 0.03 },
  eyes: {
    lerp: 0.15,
    blinkInterval: [1800, 4000],
    blinkDuration: 100,
    xRange: 0.18,
    yRange: 0.15,
    lookAroundInterval: 3000,
  },
  antenna: { wobbleAmp: 0.2, wobbleSpeed: 2.8, signalSpeed: 4 },
  emotions: {
    neutral: {
      eyeColor: '#ffffff',
      secondaryColor: '#a1a1aa',
      mouthIntensity: 1.5,
      headTilt: 0,
      eyeScale: 1,
      mouthCurve: 0,
      pulseSpeed: 1,
      eyebrowAngle: 0,
      energyLevel: 0.5,
      particleCount: 20,
    },
    happy: {
      eyeColor: '#ffffff',
      secondaryColor: '#e4e4e7',
      mouthIntensity: 3.5,
      headTilt: 0.15,
      eyeScale: 1.3,
      mouthCurve: 0.2,
      pulseSpeed: 1.8,
      eyebrowAngle: 0.25,
      energyLevel: 0.8,
      particleCount: 40,
    },
    excited: {
      eyeColor: '#ffffff',
      secondaryColor: '#f4f4f5',
      mouthIntensity: 4.5,
      headTilt: -0.1,
      eyeScale: 1.5,
      mouthCurve: 0.3,
      pulseSpeed: 3,
      eyebrowAngle: 0.35,
      energyLevel: 1,
      particleCount: 60,
    },
    thinking: {
      eyeColor: '#d4d4d8',
      secondaryColor: '#71717a',
      mouthIntensity: 1.2,
      headTilt: 0.35,
      eyeScale: 0.75,
      mouthCurve: -0.05,
      pulseSpeed: 0.6,
      eyebrowAngle: 0.2,
      energyLevel: 0.4,
      particleCount: 15,
    },
    confused: {
      eyeColor: '#e4e4e7',
      secondaryColor: '#a1a1aa',
      mouthIntensity: 2,
      headTilt: -0.28,
      eyeScale: 0.95,
      mouthCurve: -0.12,
      pulseSpeed: 1.3,
      eyebrowAngle: -0.25,
      energyLevel: 0.6,
      particleCount: 25,
    },
    surprised: {
      eyeColor: '#ffffff',
      secondaryColor: '#f4f4f5',
      mouthIntensity: 4,
      headTilt: 0,
      eyeScale: 1.7,
      mouthCurve: 0.35,
      pulseSpeed: 3.5,
      eyebrowAngle: 0.45,
      energyLevel: 0.9,
      particleCount: 50,
    },
    sad: {
      eyeColor: '#a1a1aa',
      secondaryColor: '#52525b',
      mouthIntensity: 0.7,
      headTilt: -0.25,
      eyeScale: 0.65,
      mouthCurve: -0.25,
      pulseSpeed: 0.4,
      eyebrowAngle: -0.35,
      energyLevel: 0.2,
      particleCount: 10,
    },
    angry: {
      eyeColor: '#ffffff',
      secondaryColor: '#52525b',
      mouthIntensity: 3,
      headTilt: 0.12,
      eyeScale: 1.15,
      mouthCurve: -0.18,
      pulseSpeed: 2.2,
      eyebrowAngle: -0.45,
      energyLevel: 0.85,
      particleCount: 35,
    },
    love: {
      eyeColor: '#ffffff',
      secondaryColor: '#e4e4e7',
      mouthIntensity: 3.3,
      headTilt: 0.22,
      eyeScale: 1.35,
      mouthCurve: 0.22,
      pulseSpeed: 2,
      eyebrowAngle: 0.28,
      energyLevel: 0.75,
      particleCount: 45,
    },
    sleepy: {
      eyeColor: '#71717a',
      secondaryColor: '#3f3f46',
      mouthIntensity: 0.8,
      headTilt: -0.15,
      eyeScale: 0.5,
      mouthCurve: 0.05,
      pulseSpeed: 0.3,
      eyebrowAngle: -0.2,
      energyLevel: 0.1,
      particleCount: 5,
    },
    focused: {
      eyeColor: '#ffffff',
      secondaryColor: '#d4d4d8',
      mouthIntensity: 1.8,
      headTilt: 0.05,
      eyeScale: 1.1,
      mouthCurve: 0,
      pulseSpeed: 1.2,
      eyebrowAngle: 0.1,
      energyLevel: 0.7,
      particleCount: 30,
    },
  },
};

export default CONFIG;
