type Wissenschaftler = Doktorand & {
  forschung: Forschung;
  geteilteForschung: Forschung | [];
};

type Doktorand = Spieler & {
  wissenstand: Wissensstand;
};

type Box = unknown;
type Forschung = unknown;
type Hypothese = unknown;
type Beobachtung = unknown;
type AktiveWissenschaftlerIn = unknown;
type BoxenStapel = unknown;
type Wissensstand = unknown;
type Reihenfolge = unknown;
type Experiment = unknown;
type Spiel = unknown;
type Spieler = unknown;

type ErmittleWissensstand = (kandidat: Spieler, wissensstand: Wissensstand) => Doktorand;
type VerteileBoxen = (boxen: BoxenStapel, doktoranden: Array<Doktorand>) => [BoxenStapel, Array<Wissenschaftler>];
