# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ApplicationRecord.transaction do
    User.destroy_all;
    Note.destroy_all
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('notes')

    users = [
        User.create!(email: "superman@gmail.com",  password: "greenrock"),
        User.create!(email: "bluebeetle@gmail.com",  password: "scarab"),
        User.create!(email: "batman@gmail.com",  password: "moneymoney"),
        User.create!(email: "wonderwoman@gmail.com",  password: "amazon"),
        User.create!(email: "greenlantern@gmail.com",  password: "brightestday")
    ]

    #Superman Notes
    Note.create!(title: "Rescue Louis", body: "She has been kidnapped by Lex Luxor! I must save her!",
                author_id: User.first.id, color: "red")
    Note.create!(title: "Walk Krypto", body: "Make sure he doesn't pee in the neighbors yard again!",
                author_id: User.first.id, position: 2, color: "blue")
    Note.create!(title: "", body: "account: gogome! pw: greenrock",
                author_id: User.first.id, position: 3, color: "purple")
    
    Note.create!(title: "Groceries", body: "Eggs, bananas, freedom",
                author_id: User.first.id, position: 4, color: "green")

    #Blue Beetle Notes
    Note.create!(title: "Get scarab off of me!", body: "I can't believe Ted got me into this.",
                author_id: users[1].id)
    Note.create!(title: "Stay blue", body: "All day long!",
                author_id: users[1].id, position: 2)
    Note.create!(title: "", body: "DON'T FORGET TO CALL TRACY!!!",
                author_id: users[1].id, position: 3)

    #Batman Notes
    Note.create!(title: "Fight Crime", body: "",
                author_id: users[2].id)
    Note.create!(title: "Train Robin", body: "That boy needs to do more pushups",
                author_id: users[2].id, position: 2)
    Note.create!(title: "Weakness List", body: "Superman: Kryptonite",
                author_id: users[2].id, position: 3)


    #Large Body Text
    body = "The New 52 Superman
        Vol. 1: What Price Tomorrow? collects Superman vol. 3 #1–6, 144 pages, November 2012, ISBN 978-1401234683
        Vol. 2: Secrets and Lies collects Superman vol. 3 #7–12 and Superman Annual vol. 3 #1, 176 pages, July 2013, ISBN 978-1401240288
        Vol. 3: Fury at World's End collects Superman vol. 3 #0, 13–19, 192 pages, January 2014, ISBN 978-1401243203
        Vol. 4: Psi-War collects Superman vol. 3 #18-24, and Superman Annual vol. 3 #2, 224 pages, August 2014, ISBN 140-1246230
        Vol. 5: Under Fire collects Superman vol. 3 #25-31, 176 pages, February 2015, ISBN 978-1401250959
        Vol. 6: The Men of Tomorrow collects Superman vol. 3 #32-39, 256 pages, August 2015, ISBN 978-1401252397
        Vol. 1: Before Truth collects Superman vol. 3 #40-44, 224 pages, April 2016, ISBN 978-1401259815
        Vol. 2: Return to Glory collects Superman vol. 3 #45-52, 320 pages, October 2016, ISBN 978-1401265113
        Relaunched Adventures of Superman series (2013-2014)
        Vol. 1: collects Adventures of Superman vol. 2 #1-5, 168 pages, April 2014, ISBN 978-1401246884
        Vol. 2: collects Adventures of Superman vol. 2 #6-10, 168 pages, October 2014, ISBN 978-1401250362
        Vol. 3: collects Adventures of Superman vol. 2 #11-17, 160 pages, March 2015, ISBN 978-1401253301
        DC Rebirth
        Vol. 1: Son of Superman collects Superman vol. 4 #1-6 and Superman: Rebirth #1, 176 pages, January 2017, ISBN 978-1401267766
        Vol. 2: Trials of the Super Son collects Superman vol. 4 #7-13, 168 pages, April 2017, ISBN 978-1401268602
        Vol. 3: Multiplicity collects Superman vol. 4 #14-17 and Superman Annual #1, 144 pages, August 2017, ISBN 978-1401271541
        Vol. 4: Black Dawn collects Superman vol. 4 #20-26, 176 pages, November 2017, ISBN 978-1401274689
        Vol. 5: Hopes and Fears collects Superman vol. 4 #27-32, 144 pages, April 2018, ISBN 978-1401277291
        Vol. 6: Imperius Lex collects Superman vol. 4 #33-36 and #39-41, 168 pages, August 2018, ISBN 978-1401281236
        Vol. 7: Bizarroverse collects Superman vol. 4 #42-45 and material from Superman Special #1, 156 pages, November 2018, ISBN 978-1401285241
        Superman (vol. 4) has also been released in four deluxe hardcovers:

        Superman: Rebirth Deluxe Edition Book 1 collects Superman vol. 4 #1-13 and Superman: Rebirth #1, 336 pages, September 2017, ISBN 978-1401271558
        Superman: Rebirth Deluxe Edition Book 2 collects Superman vol. 4 #14-26 and Superman Annual #1, 360 pages, May 2018, ISBN 978-1401278663
        Superman: Rebirth Deluxe Edition Book 3 collects Superman vol. 4 #27-36, 240 pages, December 2018, ISBN 978-1401284510
        Superman: Rebirth Deluxe Edition Book 4 collects Superman vol. 4 #37-45, Superman Special #1 and a story from Action Comics #1000, 280 pages, May 2019, ISBN 978-1401289355"

    body2 = "Superman

        1979 – Atari 2600	Notes:
        The player takes control of Superman, who must repair the bridge destroyed by Lex Luthor, capture Luthor and his henchmen, enter a phone booth to turn back into Clark Kent, then return to the Daily Planet in the shortest amount of time.
        To slow Superman's progress, Kryptonite has been released by Luthor. If hit by Kryptonite, Superman loses his abilities to capture criminals and fly. To regain them, he must find and kiss Lois Lane.
        One of the earliest console games to feature a pause option.

        Superman: The Game

        1985 – Commodore 64, Atari 400/800	Notes:
        Originally for the C64 but was also ported to the Atari and many other systems in Europe
        Superman's enemy Darkseid is also playable

        Superman

        1987 – NES	Notes:
        The Japanese version of the game for the Famicom features the John Williams Superman theme.

        Superman

        1988 – Arcade	Notes:
        Taito action game that allows a second player to play a red-garbed Superman
        Features John Williams Superman theme from the film series

        Superman: The Man of Steel

        1989 – Commodore 64, ZX Spectrum, MSX, Amiga, Atari ST[4][5]	Notes:
        Hybrid action game featuring 3D flying, overhead vertical scrolling and side scrolling sections
        Features both Lex Luthor and Darkseid as villains

        Superman

        1992 – Genesis	Notes:
        Side-scrolling arcade game where the player controls Superman through various levels in an effort to defeat various villains, culminating with the evil supervillain Brainiac. In Europe it was released as Superman: The Man of Steel.

        Superman: The Man of Steel

        1993 – Master System, Game Gear[6]	Notes:
        2D scrolling action game developed by Graftgold and published in Europe only by Virgin Interactive. It is based on the earlier Superman game for the Genesis by Sunsoft.

        The Death and Return of Superman

        1994 – Super NES and Genesis	Notes:
        Beat 'em up video game based on The Death of Superman storyline

        Superman

        1997 – Game Boy[7]	Notes:
        Scrolling action game developed by Titus Software.

        Superman Activity Center

        1998 – MacOS, Microsoft Windows[8]	Notes:
        Educational game based on Superman: The Animated Series, from Knowledge Adventure

        Superman: The New Adventures

        1999 – Nintendo 64[9]	Notes:
        Unofficially known as Superman 64, it is a 3D action game in which the player takes control of Superman who must rescue his friends from a virtual-reality replica of Metropolis
        The game is notorious among critics and gamers as one of the worst games ever made. Common criticisms include poor collision detection, awkward controls, and bizarre glitches.

        Superman: Shadow of Apokolips

        2002 – PlayStation 2, Nintendo GameCube	Notes:
        Based on Superman: The Animated Series, cut scenes used cel-shaded animation to emulate the look of traditional animation. The original Superman: The Animated Series voice cast all returned to their roles for the game.

        Superman: The Man of Steel

        2002 – Xbox[10][11]	Notes:
        Action game from Circus Freak Studios and published by Atari based on the comic books.

        Superman: Countdown to Apokolips

        2003 – Game Boy Advance	Notes:
        From Atari, based largely on Superman: The Animated Series, including its character portrayals, and artistic style.
        There are bosses such as Livewire, Darkseid, and Bruno Mannheim, as well as goons and other items.

        Superman The Greatest Superhero

        July 6, 2005 – V-Smile[12]	Notes:
        Educational game of Superman, from VTech.

        Superman Returns

        2006 – Nintendo DS, PlayStation 2, Xbox 360, Xbox[13]	Notes:
        Loosely based on the Superman movie of the same name; features the voice and likeness of many cast members. In the game, Superman combats Metallo, who does not appear in the movie, as well as other classic villains
        For the Game Boy Advance, a different style of game was released to exploit the license. Superman Returns: Fortress of Solitude combines various puzzle challenges (one of which was Sudoku with superpowers) punctuated with short flying action sequences.

        Superman

        2006 – Handheld TV game"

    Note.create!(title: "List of Superman Comics", body: body,
                author_id: User.first.id, position: 5)

    Note.create!(title: "List of Superman Games", body: body2,
                author_id: User.first.id, position: 6)
end
