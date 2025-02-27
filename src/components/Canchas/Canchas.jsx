// Datos predefinidos para zonas de fútbol
export const ZONES = {
    CANCHA_5: 'cancha_5',
    CANCHA_7: 'cancha_7',
    CANCHA_11: 'cancha_11'
};

export const ZONE_LABELS = {
    [ZONES.CANCHA_5]: 'Cancha de Fútbol 5',
    [ZONES.CANCHA_7]: 'Cancha de Fútbol 7',
    [ZONES.CANCHA_11]: 'Cancha de Fútbol 11'
};

export const ZONE_CAPACITIES = {
    [ZONES.CANCHA_5]: {
        min: 4,
        max: 10
    },
    [ZONES.CANCHA_7]: {
        min: 6,
        max: 14
    },
    [ZONES.CANCHA_11]: {
        min: 10,
        max: 22
    }
};

export const RESERVATION_STATUS = {
    PENDING: 'pending',
    CONFIRMED: 'confirmed',
    CANCELLED: 'cancelled'
};

export const TIME_SLOTS = [
    '08:00', '09:00',
    '10:00', '11:00',
    '12:00', '13:00',
    '14:00', '15:00',
    '16:00', '17:00',
    '18:00', '19:00',
    '20:00', '21:00'
];

export const ZONE_DESCRIPTIONS = {
    [ZONES.CANCHA_5]: 'Cancha sintética para partidos rápidos y dinámicos.',
    [ZONES.CANCHA_7]: 'Cancha de fútbol con medidas estándar para equipos medianos.',
    [ZONES.CANCHA_11]: 'Cancha de fútbol profesional con césped natural o sintético.'
};
