-- CreateTable
CREATE TABLE "public"."Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sortingOrder" TEXT NOT NULL,
    "finalized" BOOLEAN NOT NULL DEFAULT false,
    "firstPlace" INTEGER,
    "secondPlace" INTEGER,
    "thirdPlace" INTEGER,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Student" (
    "bidId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "houseId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "public"."House" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EventCandidate" (
    "eventId" INTEGER NOT NULL,
    "bidId" INTEGER NOT NULL,
    "metric" DOUBLE PRECISION,
    "score" INTEGER,

    CONSTRAINT "EventCandidate_pkey" PRIMARY KEY ("eventId","bidId")
);

-- CreateTable
CREATE TABLE "public"."EventHouse" (
    "eventId" INTEGER NOT NULL,
    "houseId" INTEGER NOT NULL,
    "metric" DOUBLE PRECISION,
    "score" INTEGER,

    CONSTRAINT "EventHouse_pkey" PRIMARY KEY ("eventId","houseId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_bidId_key" ON "public"."Student"("bidId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentId_key" ON "public"."Student"("studentId");

-- AddForeignKey
ALTER TABLE "public"."Student" ADD CONSTRAINT "Student_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "public"."House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventCandidate" ADD CONSTRAINT "EventCandidate_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventCandidate" ADD CONSTRAINT "EventCandidate_bidId_fkey" FOREIGN KEY ("bidId") REFERENCES "public"."Student"("bidId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventHouse" ADD CONSTRAINT "EventHouse_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventHouse" ADD CONSTRAINT "EventHouse_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "public"."House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
